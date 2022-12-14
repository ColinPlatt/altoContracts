/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  UniversalExchangeEventV1,
  UniversalExchangeEventV1Interface,
} from "../UniversalExchangeEventV1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userA",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userB",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct UniversalExchangeEventV1.ExchangeDetails",
        name: "a",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct UniversalExchangeEventV1.ExchangeDetails",
        name: "b",
        type: "tuple",
      },
    ],
    name: "ExchangeExecuted",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122003af04247afb075f9040e1c4f545799bfdfc28f2898cb58382518b6fd9ce397064736f6c634300080a0033";

type UniversalExchangeEventV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniversalExchangeEventV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniversalExchangeEventV1__factory extends ContractFactory {
  constructor(...args: UniversalExchangeEventV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniversalExchangeEventV1> {
    return super.deploy(overrides || {}) as Promise<UniversalExchangeEventV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniversalExchangeEventV1 {
    return super.attach(address) as UniversalExchangeEventV1;
  }
  override connect(signer: Signer): UniversalExchangeEventV1__factory {
    return super.connect(signer) as UniversalExchangeEventV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniversalExchangeEventV1Interface {
    return new utils.Interface(_abi) as UniversalExchangeEventV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniversalExchangeEventV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniversalExchangeEventV1;
  }
}
