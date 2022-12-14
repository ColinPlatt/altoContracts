/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface IAsksCoreErc20Interface extends utils.Interface {
  functions: {
    "cancelAsk(address,uint256)": FunctionFragment;
    "createAsk(address,uint256,uint256,address)": FunctionFragment;
    "fillAsk(address,uint256,uint256,address)": FunctionFragment;
    "setAskPrice(address,uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelAsk"
      | "createAsk"
      | "fillAsk"
      | "setAskPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelAsk",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAsk",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fillAsk",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setAskPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "cancelAsk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createAsk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fillAsk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAskPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAsksCoreErc20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAsksCoreErc20Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fillAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAskPrice(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancelAsk(
    _tokenContract: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createAsk(
    _tokenContract: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    _currency: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fillAsk(
    _tokenContract: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    _currency: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAskPrice(
    _tokenContract: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    _currency: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fillAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAskPrice(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cancelAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fillAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAskPrice(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fillAsk(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAskPrice(
      _tokenContract: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _currency: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
