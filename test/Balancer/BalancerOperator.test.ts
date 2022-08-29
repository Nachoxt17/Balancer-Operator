import { assert } from "chai";
import { ethers } from "hardhat";
import { utils } from "ethers";

const { DAI_WHALE, WETH, WETH_WHALE, USDC, USDC_WHALE } = require("../ParametersConfig.js");

let  usdcToken: any, wethToken: any, LPtoken: any, operator: any, admin: any, user1: any;

describe("Balancer Pool S.Contract", function () {
  const USDC_INDEX = 0;
  const WETH_INDEX = 1;
  const DECIMALS = 6;//-(Decimals for USDC and USDT. WETH has 18 Decimals).
  const BALANCER_VAULT_ADDRESS = "0xBA12222222228d8Ba445958a75a0704d566BF2C8";
  const LP_TOKEN = "0x96646936b91d6B9D7D0c47C496AfBF3D6ec7B6f8";/**-(This is also the BPool itself).*/
  const BALANCER_POOL_ID = "0x96646936b91d6b9d7d0c47c496afbf3d6ec7b6f8000200000000000000000019";

  before(async () => {
    admin = await ethers.getImpersonatedSigner(DAI_WHALE);
    user1 = await ethers.getImpersonatedSigner(WETH_WHALE);

    usdcToken = await ethers.getContractAt("IERC20Modified", USDC, admin);
    wethToken = await ethers.getContractAt("IERC20Modified", WETH, admin);

    LPtoken = await ethers.getContractAt("IERC20Modified", LP_TOKEN, admin);

    let BalancerOperator = await ethers.getContractFactory("BalancerOperator");
    operator = await BalancerOperator.deploy();
  });

  it("Balancer Pool Adds Liquidity", async () => {
    let user1USDCBalanceBefore = await usdcToken.balanceOf(user1.address);
    let user1WETHBalanceBefore = await wethToken.balanceOf(user1.address);
    let user1LPTokensBefore = await LPtoken.balanceOf(user1.address);

    console.log(`--- Before Adds Liquidity ---`);
    console.log(`User1 USDC: ${user1USDCBalanceBefore}`);
    console.log(`User1 WETH: ${user1WETHBalanceBefore}`);
    console.log(`User1 L.P.Tokens: ${user1LPTokensBefore}`);

    await usdcToken.connect(user1).approve(operator.address, ethers.utils.parseUnits("100", DECIMALS));
    await wethToken.connect(user1).approve(operator.address, ethers.utils.parseUnits("2", 18));

    await operator
      .connect(user1)
      .addLiquidity(BALANCER_VAULT_ADDRESS,
      BALANCER_POOL_ID,
      [USDC, WETH],
      [ethers.utils.parseUnits("100", DECIMALS),
      ethers.utils.parseUnits("2", 18)]);

    let user1USDCBalanceAfter = await usdcToken.balanceOf(user1.address);
    let user1WETHBalanceAfter = await wethToken.balanceOf(user1.address);
    let user1LPTokensAfter = await LPtoken.balanceOf(user1.address);

    console.log(`--- After Adds Liquidity ---`);
    console.log(`User1 USDC: ${user1USDCBalanceAfter}`);
    console.log(`User1 WETH: ${user1WETHBalanceAfter}`);
    console.log(`User1 L.P.Tokens: ${user1LPTokensAfter}`);

    /**-User 1 Balances After Adding WETH 2 and USDC 100 of Liquidity
    and Receiving his L.P. Tokens:*/
    assert((user1USDCBalanceAfter).lt(user1USDCBalanceBefore));
    assert((user1WETHBalanceAfter).lt(user1WETHBalanceBefore));
    assert((user1LPTokensAfter).gte(user1LPTokensBefore));
    /**-NOTE:_ If you Change the BlockNumber "15269796" from the "hardhat.config.ts",
     * the Numbers will Change and this Assertion will Fail.*/
  });

  it("Balancer Pool Removes Liquidity", async () => {
    let user1USDCBalanceBefore = await usdcToken.balanceOf(user1.address);
    let user1WETHBalanceBefore = await wethToken.balanceOf(user1.address);
    let user1LPTokensBefore = await LPtoken.balanceOf(user1.address);

    console.log(`--- Before Removes Liquidity ---`);
    console.log(`User1 USDC: ${user1USDCBalanceBefore}`);
    console.log(`User1 WETH: ${user1WETHBalanceBefore}`);
    console.log(`User1 L.P.Tokens: ${user1LPTokensBefore}`);

    await LPtoken.connect(user1).approve(operator.address, user1LPTokensBefore);

    await operator.connect(user1)
    .removeLiquidity(BALANCER_VAULT_ADDRESS,
      BALANCER_POOL_ID,
      LP_TOKEN,
      [USDC, WETH],
      [ethers.utils.parseUnits("100", DECIMALS),
      ethers.utils.parseUnits("2", 18)]);

    let user1USDCBalanceAfter = await usdcToken.balanceOf(user1.address);
    let user1WETHBalanceAfter = await wethToken.balanceOf(user1.address);
    let user1LPTokensAfter = await LPtoken.balanceOf(user1.address);

    console.log(`--- After Removes Liquidity ---`);
    console.log(`User1 USDC: ${user1USDCBalanceAfter}`);
    console.log(`User1 WETH: ${user1WETHBalanceAfter}`);
    console.log(`User1 L.P.Tokens: ${user1LPTokensAfter}`);

    /**-User 1 Balances After Removing all his WETH amd USDC Liquidity
    and Burning his 278,913654414532411523 L.P. Tokens:*/
    assert((user1USDCBalanceAfter).gte(user1USDCBalanceBefore));
    assert((user1WETHBalanceAfter).gte(user1WETHBalanceBefore));
    assert((user1LPTokensAfter).lt(user1LPTokensBefore));
    /**-NOTE:_ If you Change the BlockNumber "15269796" from the "hardhat.config.ts",
     * the Numbers will Change and this Assertion will Fail.*/
  });

  it("Balancer Pool Exchanges Tokens", async () => {
    let user1USDCBalanceBefore = await usdcToken.balanceOf(user1.address);
    let user1WETHBalanceBefore = await wethToken.balanceOf(user1.address);

    console.log(`--- Before Exchanges ---`);
    console.log(`User1 USDC: ${user1USDCBalanceBefore}`);
    console.log(`User1 WETH: ${user1WETHBalanceBefore}`);

    await usdcToken.connect(user1).approve(operator.address, ethers.utils.parseUnits("1000", DECIMALS));

    await operator.connect(user1)
    .exchangeTokens(
      BALANCER_VAULT_ADDRESS,
      BALANCER_POOL_ID,
      USDC,
      ethers.utils.parseUnits("1000", DECIMALS),
      WETH);

      let user1USDCBalanceAfter = await usdcToken.balanceOf(user1.address);
      let user1WETHBalanceAfter = await wethToken.balanceOf(user1.address);

      console.log(`--- After Exchanges ---`);
      console.log(`User1 USDC: ${user1USDCBalanceAfter}`);
      console.log(`User1 WETH: ${user1WETHBalanceAfter}`);

      //-User 1 Balances After Exchanging USDC 1.000 for WETH:
      assert((user1USDCBalanceAfter).lt(user1USDCBalanceBefore));
      assert((user1WETHBalanceAfter).gte(user1WETHBalanceBefore));
      /**-NOTE:_ If you Change the BlockNumber "15269796" from the "hardhat.config.ts",
     * the Numbers will Change and this Assertion will Fail.*/
  });
});