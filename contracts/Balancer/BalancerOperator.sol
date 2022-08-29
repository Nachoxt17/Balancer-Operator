// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import { IERC20Modified } from "../IERC20Modified.sol";
import { IBPool } from "./IBPool.sol";

import { IVault } from "./IVault.sol";
import { IBalancerHelpers } from "./IBalancerHelpers.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Balancer Pool Operator Example.
/// @author Ignacio Ceaglio for 10Clouds.

/*
 * - Balancer 50%USDC/50%WETH Pool and L.P. Token Smart Contract Address:
 * - 0x96646936b91d6B9D7D0c47C496AfBF3D6ec7B6f8
 * - Balancer 50%USDC/50%WETH Vault Smart Contract Address:
 * - 0xBA12222222228d8Ba445958a75a0704d566BF2C8
 * - Balancer 50%USDC/50%WETH Vault Authorizer Smart Contract Address:
 * - 0xa331d84ec860bf466b4cdccfb4ac09a1b43f3ae6
 * The Vault holds all pool tokens and performs the related bookkeeping. It serves
 * as a single entry point for pool interactions like joins, exits and swaps and
 * delegates to the respective pools.
 * - Pool ID: 0x96646936b91d6b9d7d0c47c496afbf3d6ec7b6f8000200000000000000000019
 * Index 0: USDC - 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
 * Index 1: WETH - 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
 */

contract BalancerOperator is IVault, Ownable {
    /** @dev When providing your assets, you must ensure that the tokens are sorted numerically by token address. It's also important
    to note that the values in maxAmountsIn correspond to the same index value in assets, so these arrays must be made in parallel
    after sorting.*/

    IBalancerHelpers BalancerHelpers = IBalancerHelpers(0x5aDDCCa35b7A0D07C74063c48700C8590E87864E);

    function setBalancerHelpers(address helpersAddress) public onlyOwner {
        BalancerHelpers = IBalancerHelpers(helpersAddress);
    }

    function addLiquidity(
        address vaultAddr,
        bytes32 poolId,
        address[] calldata assets,
        uint256[] calldata maxAmountsIn
    ) external {
        uint256 oneUint256 = 1;
        bytes memory userDataEncoded = abi.encode(oneUint256, maxAmountsIn, oneUint256); //https://dev.balancer.fi/helpers/encoding
        JoinPoolRequest memory InRequest = JoinPoolRequest(assets, maxAmountsIn, userDataEncoded, false);

        for (uint256 i = 0; i < maxAmountsIn.length; i++) {
            if (maxAmountsIn[i] > 0) {
                IERC20Modified(assets[i]).transferFrom(msg.sender, address(this), maxAmountsIn[i]);
                IERC20Modified(assets[i]).approve(vaultAddr, maxAmountsIn[i]);
            }
        }

        IVault(vaultAddr).joinPool(poolId, address(this), msg.sender, InRequest);
    }

    /** @dev When providing your assets, you must ensure that the tokens are sorted numerically by token address. It's also important
    to note that the values in maxAmountsIn correspond to the same index value in assets, so these arrays must be made in parallel
    after sorting.*/
    function removeLiquidity(
        address vaultAddr,
        bytes32 poolId,
        address poolAddress,
        address[] calldata assets,
        uint256[] calldata minAmountsOut
    ) external {
        uint256 oneUint256 = 1;
        bytes memory userDataEncoded = abi.encode(oneUint256, minAmountsOut, oneUint256); //https://dev.balancer.fi/helpers/encoding
        ExitPoolRequest memory InitOutRequest = ExitPoolRequest(assets, minAmountsOut, userDataEncoded, false);
        (uint256 bptIn, uint256[] memory amountsOut) = BalancerHelpers.queryExit(
            poolId,
            address(this),
            msg.sender,
            InitOutRequest
        );
        ExitPoolRequest memory FinalOutRequest = ExitPoolRequest(assets, amountsOut, userDataEncoded, false);

        //-User's L.P. ERC-20 Tokens are Transferred to the Operator S.C.:
        uint256 userLPTokensAmount = IERC20Modified(poolAddress).balanceOf(msg.sender);
        IERC20Modified(poolAddress).transferFrom(msg.sender, address(this), userLPTokensAmount);
        IERC20Modified(poolAddress).approve(vaultAddr, userLPTokensAmount);

        IVault(vaultAddr).exitPool(poolId, address(this), payable(msg.sender), FinalOutRequest);
    }

    function exchangeTokens(
        address vaultAddr,
        bytes32 poolId,
        address tokenInAddress,
        uint256 maxAmountIn,
        address tokenOutAddress
    ) external {
        uint256 oneUint256 = 1;
        IERC20Modified(tokenInAddress).transferFrom(msg.sender, address(this), maxAmountIn);
        IERC20Modified(tokenInAddress).approve(vaultAddr, maxAmountIn);

        bytes memory userDataEncoded = abi.encode(oneUint256, maxAmountIn, oneUint256); //https://dev.balancer.fi/helpers/encoding
        SingleSwap memory SingleSwapRequest = SingleSwap(
            poolId,
            SwapKind.GIVEN_OUT,
            tokenInAddress,
            tokenOutAddress,
            maxAmountIn,
            userDataEncoded
        );
        FundManagement memory FundManagementRequest = FundManagement(address(this), false, payable(msg.sender), false);
        IVault(vaultAddr).swap(SingleSwapRequest, FundManagementRequest, maxAmountIn, (block.timestamp + 3 minutes));
    }

    //-Empty "joinPool" Function Implementation Required by the IVault Interface:
    function joinPool(
        bytes32 poolId,
        address sender,
        address recipient,
        JoinPoolRequest memory request
    ) public payable {}

    //-Empty "exitPool" Function Implementation Required by the IVault Interface:
    function exitPool(
        bytes32 poolId,
        address sender,
        address payable recipient,
        ExitPoolRequest memory request
    ) public {}

    function swap(
        SingleSwap memory singleSwap,
        FundManagement memory funds,
        uint256 limit,
        uint256 deadline
    ) external payable returns (uint256) {}
}
