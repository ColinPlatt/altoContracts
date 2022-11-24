/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Zorb, ZorbInterface } from "../Zorb";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ZMM",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "setApprovalForModuleBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_modules",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setBatchApprovalForModules",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610aa8380380610aa883398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610a15806100936000396000f3fe6080604052600436106100745760003560e01c80639dbb83a71161004e5780639dbb83a71461018a578063bc197c81146101aa578063bcb11ad3146101ef578063f23a6e611461020f57600080fd5b806301ffc9a7146100be578063150b7a02146100f3578063152c1b5b1461016857600080fd5b366100b95760408051338152346020820152478183015290517f74cf3d18d0ddca79038197ad0dd2c7fa5005ef61a5d1ed190e8a8a437e2fcf109181900360600190a1005b600080fd5b3480156100ca57600080fd5b506100de6100d9366004610493565b610254565b60405190151581526020015b60405180910390f35b3480156100ff57600080fd5b5061013761010e366004610611565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100ea565b34801561017457600080fd5b50610188610183366004610689565b6102ed565b005b34801561019657600080fd5b506101886101a53660046106bc565b61037f565b3480156101b657600080fd5b506101376101c53660046107c5565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156101fb57600080fd5b5061018861020a36600461086f565b61043b565b34801561021b57600080fd5b5061013761022a366004610919565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806102e757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000546040517f152c1b5b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015283151560248301529091169063152c1b5b906044015b600060405180830381600087803b15801561036357600080fd5b505af1158015610377573d6000803e3d6000fd5b505050505050565b6000546040517f9dbb83a700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8981166004830152888116602483015287151560448301526064820187905260ff8616608483015260a4820185905260c4820184905290911690639dbb83a79060e401600060405180830381600087803b15801561041a57600080fd5b505af115801561042e573d6000803e3d6000fd5b5050505050505050505050565b6000546040517fbcb11ad300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063bcb11ad390610349908590859060040161097e565b6000602082840312156104a557600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146104d557600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461050057600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561057b5761057b610505565b604052919050565b600082601f83011261059457600080fd5b813567ffffffffffffffff8111156105ae576105ae610505565b6105df60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610534565b8181528460208386010111156105f457600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561062757600080fd5b610630856104dc565b935061063e602086016104dc565b925060408501359150606085013567ffffffffffffffff81111561066157600080fd5b61066d87828801610583565b91505092959194509250565b8035801515811461050057600080fd5b6000806040838503121561069c57600080fd5b6106a5836104dc565b91506106b360208401610679565b90509250929050565b600080600080600080600060e0888a0312156106d757600080fd5b6106e0886104dc565b96506106ee602089016104dc565b95506106fc60408901610679565b945060608801359350608088013560ff8116811461071957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600067ffffffffffffffff82111561075057610750610505565b5060051b60200190565b600082601f83011261076b57600080fd5b8135602061078061077b83610736565b610534565b82815260059290921b8401810191818101908684111561079f57600080fd5b8286015b848110156107ba57803583529183019183016107a3565b509695505050505050565b600080600080600060a086880312156107dd57600080fd5b6107e6866104dc565b94506107f4602087016104dc565b9350604086013567ffffffffffffffff8082111561081157600080fd5b61081d89838a0161075a565b9450606088013591508082111561083357600080fd5b61083f89838a0161075a565b9350608088013591508082111561085557600080fd5b5061086288828901610583565b9150509295509295909350565b6000806040838503121561088257600080fd5b823567ffffffffffffffff81111561089957600080fd5b8301601f810185136108aa57600080fd5b803560206108ba61077b83610736565b82815260059290921b830181019181810190888411156108d957600080fd5b938201935b838510156108fe576108ef856104dc565b825293820193908201906108de565b955061090d9050868201610679565b93505050509250929050565b600080600080600060a0868803121561093157600080fd5b61093a866104dc565b9450610948602087016104dc565b93506040860135925060608601359150608086013567ffffffffffffffff81111561097257600080fd5b61086288828901610583565b604080825283519082018190526000906020906060840190828701845b828110156109cd57815173ffffffffffffffffffffffffffffffffffffffff168452928401929084019060010161099b565b5050509315159201919091525091905056fea264697066735822122026b7b42b5cad3ae30cc666f6d4b238cb2b58cc273e88a1d0ba5336a637ea8b1c64736f6c634300080a0033";

type ZorbConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZorbConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Zorb__factory extends ContractFactory {
  constructor(...args: ZorbConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ZMM: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Zorb> {
    return super.deploy(_ZMM, overrides || {}) as Promise<Zorb>;
  }
  override getDeployTransaction(
    _ZMM: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ZMM, overrides || {});
  }
  override attach(address: string): Zorb {
    return super.attach(address) as Zorb;
  }
  override connect(signer: Signer): Zorb__factory {
    return super.connect(signer) as Zorb__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZorbInterface {
    return new utils.Interface(_abi) as ZorbInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Zorb {
    return new Contract(address, _abi, signerOrProvider) as Zorb;
  }
}