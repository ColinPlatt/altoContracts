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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface TransferModuleInterface extends utils.Interface {
  functions: {
    "depositERC20(address,address,uint256)": FunctionFragment;
    "depositERC721(address,address,uint256)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "safeBatchDepositERC1155(address,address,uint256[],uint256[])": FunctionFragment;
    "safeBatchWithdrawERC1155(address,address,uint256[],uint256[])": FunctionFragment;
    "safeDepositERC1155(address,address,uint256,uint256)": FunctionFragment;
    "safeDepositERC721(address,address,uint256)": FunctionFragment;
    "safeWithdrawERC1155(address,address,uint256,uint256)": FunctionFragment;
    "safeWithdrawERC721(address,address,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "withdrawERC20(address,address,uint256)": FunctionFragment;
    "withdrawERC721(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "depositERC20"
      | "depositERC721"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "safeBatchDepositERC1155"
      | "safeBatchWithdrawERC1155"
      | "safeDepositERC1155"
      | "safeDepositERC721"
      | "safeWithdrawERC1155"
      | "safeWithdrawERC721"
      | "supportsInterface"
      | "withdrawERC20"
      | "withdrawERC721"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchDepositERC1155",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchWithdrawERC1155",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeDepositERC1155",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeDepositERC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeWithdrawERC1155",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeWithdrawERC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchDepositERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchWithdrawERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeDepositERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeDepositERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeWithdrawERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeWithdrawERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC721",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TransferModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TransferModuleInterface;

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
    depositERC20(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeBatchDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeBatchWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeDepositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeWithdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawERC20(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  depositERC20(
    _tokenContract: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositERC721(
    _tokenContract: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeBatchDepositERC1155(
    _tokenContract: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _tokenIds: PromiseOrValue<BigNumberish>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeBatchWithdrawERC1155(
    _tokenContract: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _tokenIds: PromiseOrValue<BigNumberish>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeDepositERC1155(
    _tokenContract: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeDepositERC721(
    _tokenContract: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeWithdrawERC1155(
    _tokenContract: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeWithdrawERC721(
    _tokenContract: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdrawERC20(
    _tokenContract: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawERC721(
    _tokenContract: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositERC20(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    safeBatchDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    safeBatchWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    safeDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    safeDepositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    safeWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    safeWithdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawERC20(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositERC20(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeBatchDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeBatchWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeDepositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeWithdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawERC20(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositERC20(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeBatchDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeBatchWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeDepositERC1155(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeDepositERC721(
      _tokenContract: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeWithdrawERC1155(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeWithdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawERC20(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawERC721(
      _tokenContract: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}