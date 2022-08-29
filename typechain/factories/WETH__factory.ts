/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETH, WETHInterface } from "../WETH";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f57726170706564204574686572000000000000000000000000000000000000008152506040518060400160405280600481526020017f5745544800000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620000b8565b508060049080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b61198280620001dd6000396000f3fe6080604052600436106100c25760003560e01c8063395093511161007f578063a457c2d711610059578063a457c2d714610290578063a9059cbb146102cd578063d0e30db01461030a578063dd62ed3e14610314576100c2565b806339509351146101eb57806370a082311461022857806395d89b4114610265576100c2565b806306fdde03146100c7578063095ea7b3146100f257806318160ddd1461012f57806323b872dd1461015a5780632e1a7d4d14610197578063313ce567146101c0575b600080fd5b3480156100d357600080fd5b506100dc610351565b6040516100e99190610fdf565b60405180910390f35b3480156100fe57600080fd5b506101196004803603810190610114919061109a565b6103e3565b60405161012691906110f5565b60405180910390f35b34801561013b57600080fd5b50610144610406565b604051610151919061111f565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c919061113a565b610410565b60405161018e91906110f5565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b9919061118d565b61043f565b005b3480156101cc57600080fd5b506101d56104de565b6040516101e291906111d6565b60405180910390f35b3480156101f757600080fd5b50610212600480360381019061020d919061109a565b6104e7565b60405161021f91906110f5565b60405180910390f35b34801561023457600080fd5b5061024f600480360381019061024a91906111f1565b61051e565b60405161025c919061111f565b60405180910390f35b34801561027157600080fd5b5061027a610566565b6040516102879190610fdf565b60405180910390f35b34801561029c57600080fd5b506102b760048036038101906102b2919061109a565b6105f8565b6040516102c491906110f5565b60405180910390f35b3480156102d957600080fd5b506102f460048036038101906102ef919061109a565b61066f565b60405161030191906110f5565b60405180910390f35b610312610692565b005b34801561032057600080fd5b5061033b6004803603810190610336919061121e565b61069e565b604051610348919061111f565b60405180910390f35b6060600380546103609061128d565b80601f016020809104026020016040519081016040528092919081815260200182805461038c9061128d565b80156103d95780601f106103ae576101008083540402835291602001916103d9565b820191906000526020600020905b8154815290600101906020018083116103bc57829003601f168201915b5050505050905090565b6000806103ee610725565b90506103fb81858561072d565b600191505092915050565b6000600254905090565b60008061041b610725565b90506104288582856108f8565b610433858585610984565b60019150509392505050565b806104493361051e565b101561048a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104819061130b565b60405180910390fd5b6104943382610c05565b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104da573d6000803e3d6000fd5b5050565b60006012905090565b6000806104f2610725565b9050610513818585610504858961069e565b61050e919061135a565b61072d565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105759061128d565b80601f01602080910402602001604051908101604052809291908181526020018280546105a19061128d565b80156105ee5780601f106105c3576101008083540402835291602001916105ee565b820191906000526020600020905b8154815290600101906020018083116105d157829003601f168201915b5050505050905090565b600080610603610725565b90506000610611828661069e565b905083811015610656576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064d90611422565b60405180910390fd5b610663828686840361072d565b60019250505092915050565b60008061067a610725565b9050610687818585610984565b600191505092915050565b61069c3334610ddc565b565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561079d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610794906114b4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561080d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080490611546565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108eb919061111f565b60405180910390a3505050565b6000610904848461069e565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461097e5781811015610970576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610967906115b2565b60405180910390fd5b61097d848484840361072d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109eb90611644565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5b906116d6565b60405180910390fd5b610a6f838383610f3c565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610af5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aec90611768565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b88919061135a565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bec919061111f565b60405180910390a3610bff848484610f41565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6c906117fa565b60405180910390fd5b610c8182600083610f3c565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfe9061188c565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610d5e91906118ac565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610dc3919061111f565b60405180910390a3610dd783600084610f41565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e439061192c565b60405180910390fd5b610e5860008383610f3c565b8060026000828254610e6a919061135a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ebf919061135a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f24919061111f565b60405180910390a3610f3860008383610f41565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f80578082015181840152602081019050610f65565b83811115610f8f576000848401525b50505050565b6000601f19601f8301169050919050565b6000610fb182610f46565b610fbb8185610f51565b9350610fcb818560208601610f62565b610fd481610f95565b840191505092915050565b60006020820190508181036000830152610ff98184610fa6565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061103182611006565b9050919050565b61104181611026565b811461104c57600080fd5b50565b60008135905061105e81611038565b92915050565b6000819050919050565b61107781611064565b811461108257600080fd5b50565b6000813590506110948161106e565b92915050565b600080604083850312156110b1576110b0611001565b5b60006110bf8582860161104f565b92505060206110d085828601611085565b9150509250929050565b60008115159050919050565b6110ef816110da565b82525050565b600060208201905061110a60008301846110e6565b92915050565b61111981611064565b82525050565b60006020820190506111346000830184611110565b92915050565b60008060006060848603121561115357611152611001565b5b60006111618682870161104f565b93505060206111728682870161104f565b925050604061118386828701611085565b9150509250925092565b6000602082840312156111a3576111a2611001565b5b60006111b184828501611085565b91505092915050565b600060ff82169050919050565b6111d0816111ba565b82525050565b60006020820190506111eb60008301846111c7565b92915050565b60006020828403121561120757611206611001565b5b60006112158482850161104f565b91505092915050565b6000806040838503121561123557611234611001565b5b60006112438582860161104f565b92505060206112548582860161104f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112a557607f821691505b602082108114156112b9576112b861125e565b5b50919050565b7f696e73756666696369656e742062616c616e63652e0000000000000000000000600082015250565b60006112f5601583610f51565b9150611300826112bf565b602082019050919050565b60006020820190508181036000830152611324816112e8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061136582611064565b915061137083611064565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113a5576113a461132b565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061140c602583610f51565b9150611417826113b0565b604082019050919050565b6000602082019050818103600083015261143b816113ff565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061149e602483610f51565b91506114a982611442565b604082019050919050565b600060208201905081810360008301526114cd81611491565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611530602283610f51565b915061153b826114d4565b604082019050919050565b6000602082019050818103600083015261155f81611523565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061159c601d83610f51565b91506115a782611566565b602082019050919050565b600060208201905081810360008301526115cb8161158f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061162e602583610f51565b9150611639826115d2565b604082019050919050565b6000602082019050818103600083015261165d81611621565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006116c0602383610f51565b91506116cb82611664565b604082019050919050565b600060208201905081810360008301526116ef816116b3565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611752602683610f51565b915061175d826116f6565b604082019050919050565b6000602082019050818103600083015261178181611745565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006117e4602183610f51565b91506117ef82611788565b604082019050919050565b60006020820190508181036000830152611813816117d7565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611876602283610f51565b91506118818261181a565b604082019050919050565b600060208201905081810360008301526118a581611869565b9050919050565b60006118b782611064565b91506118c283611064565b9250828210156118d5576118d461132b565b5b828203905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611916601f83610f51565b9150611921826118e0565b602082019050919050565b6000602082019050818103600083015261194581611909565b905091905056fea2646970667358221220dd4c55de54d62cc16a7fd4a3d849a4def33bad133a71837bf9caf0cb5e85db8564736f6c63430008090033";

export class WETH__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WETH> {
    return super.deploy(overrides || {}) as Promise<WETH>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WETH {
    return super.attach(address) as WETH;
  }
  connect(signer: Signer): WETH__factory {
    return super.connect(signer) as WETH__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHInterface {
    return new utils.Interface(_abi) as WETHInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WETH {
    return new Contract(address, _abi, signerOrProvider) as WETH;
  }
}