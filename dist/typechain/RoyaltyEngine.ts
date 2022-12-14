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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RoyaltyEngineInterface extends utils.Interface {
  functions: {
    "getRoyalty(address,uint256,uint256)": FunctionFragment;
    "recipient()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRoyalty" | "recipient"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRoyalty",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getRoyalty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;

  events: {
    "RoyaltyView(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoyaltyView"): EventFragment;
}

export interface RoyaltyViewEventObject {
  tokenAddress: string;
  tokenId: BigNumber;
  value: BigNumber;
}
export type RoyaltyViewEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  RoyaltyViewEventObject
>;

export type RoyaltyViewEventFilter = TypedEventFilter<RoyaltyViewEvent>;

export interface RoyaltyEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoyaltyEngineInterface;

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
    getRoyalty(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recipient(overrides?: CallOverrides): Promise<[string]>;
  };

  getRoyalty(
    tokenAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recipient(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getRoyalty(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    recipient(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "RoyaltyView(address,uint256,uint256)"(
      tokenAddress?: null,
      tokenId?: null,
      value?: null
    ): RoyaltyViewEventFilter;
    RoyaltyView(
      tokenAddress?: null,
      tokenId?: null,
      value?: null
    ): RoyaltyViewEventFilter;
  };

  estimateGas: {
    getRoyalty(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getRoyalty(
      tokenAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
