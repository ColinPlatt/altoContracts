/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SimpleModule, SimpleModuleInterface } from "../SimpleModule";

const _abi = [
  {
    inputs: [],
    name: "ok",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607780601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063d909b40314602d575b600080fd5b600160405190815260200160405180910390f3fea2646970667358221220ae5bdb1194488552908e279f10621b61e1e0fa088d6802090365dd2cf8fccf4964736f6c634300080a0033";

type SimpleModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleModule__factory extends ContractFactory {
  constructor(...args: SimpleModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleModule> {
    return super.deploy(overrides || {}) as Promise<SimpleModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimpleModule {
    return super.attach(address) as SimpleModule;
  }
  override connect(signer: Signer): SimpleModule__factory {
    return super.connect(signer) as SimpleModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleModuleInterface {
    return new utils.Interface(_abi) as SimpleModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleModule {
    return new Contract(address, _abi, signerOrProvider) as SimpleModule;
  }
}
