/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AsksPrivateEth,
  AsksPrivateEthInterface,
} from "../AsksPrivateEth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc721TransferHelper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_royaltyEngine",
        type: "address",
      },
      {
        internalType: "address",
        name: "_protocolFeeSettings",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
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
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "price",
            type: "uint96",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct AsksPrivateEth.Ask",
        name: "ask",
        type: "tuple",
      },
    ],
    name: "AskCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "price",
            type: "uint96",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct AsksPrivateEth.Ask",
        name: "ask",
        type: "tuple",
      },
    ],
    name: "AskCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "price",
            type: "uint96",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct AsksPrivateEth.Ask",
        name: "ask",
        type: "tuple",
      },
    ],
    name: "AskFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "price",
            type: "uint96",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct AsksPrivateEth.Ask",
        name: "ask",
        type: "tuple",
      },
    ],
    name: "AskPriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RoyaltyPayout",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_payoutCurrency",
        type: "address",
      },
    ],
    name: "_handleRoyaltyEnginePayout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "askForNFT",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "price",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "cancelAsk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
    ],
    name: "createAsk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "erc721TransferHelper",
    outputs: [
      {
        internalType: "contract ERC721TransferHelper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "fillAsk",
    outputs: [],
    stateMutability: "payable",
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
    name: "registrar",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setAskPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_royaltyEngine",
        type: "address",
      },
    ],
    name: "setRoyaltyEngineAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
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
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61010060405260016000553480156200001757600080fd5b50604051620026cb380380620026cb8339810160408190526200003a916200024d565b6040518060400160405280601081526020016f082e6d6e640a0e4d2ecc2e8ca408aa8960831b815250838383876001600160a01b031663e3e606f06040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000a5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cb9190620002b5565b6001600160a01b0316632b20e3976040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000109573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200012f9190620002b5565b6001600160a01b03918216608052600180546001600160a01b0319169483169490941790935590811660c0521660a0528051620001749060029060208401906200018e565b5050506001600160a01b0390921660e05250620003199050565b8280546200019c90620002dc565b90600052602060002090601f016020900481019282620001c057600085556200020b565b82601f10620001db57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020b578251825591602001919060010190620001ee565b50620002199291506200021d565b5090565b5b808211156200021957600081556001016200021e565b6001600160a01b03811681146200024a57600080fd5b50565b600080600080608085870312156200026457600080fd5b8451620002718162000234565b6020860151909450620002848162000234565b6040860151909350620002978162000234565b6060860151909250620002aa8162000234565b939692955090935050565b600060208284031215620002c857600080fd5b8151620002d58162000234565b9392505050565b600181811c90821680620002f157607f821691505b602082108114156200031357634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161235c6200036f600039600081816102fd0152610ebe0152600081816115d0015261167c01526000818161014c01526112d101526000818161187e0152611916015261235c6000f3fe6080604052600436106100bc5760003560e01c806340b80746116100745780639128c22c1161004e5780639128c22c146102aa578063b249bb30146102cb578063f7cd1d9b146102eb57600080fd5b806340b80746146101b3578063418f0656146101d357806368b5a9a81461029757600080fd5b80630be48095116100a55780630be48095146101185780632b20e3971461013a5780632b9f663e1461019357600080fd5b806301ffc9a7146100c157806306fdde03146100f6575b600080fd5b3480156100cd57600080fd5b506100e16100dc366004611e32565b61031f565b60405190151581526020015b60405180910390f35b34801561010257600080fd5b5061010b6103b8565b6040516100ed9190611ea0565b34801561012457600080fd5b50610138610133366004611f16565b610446565b005b34801561014657600080fd5b5061016e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ed565b34801561019f57600080fd5b506101386101ae366004611f4b565b6105fc565b3480156101bf57600080fd5b506101386101ce366004611f95565b610908565b3480156101df57600080fd5b506102536101ee366004611f95565b60036020908152600092835260408084209091529082529020805460019091015473ffffffffffffffffffffffffffffffffffffffff808316927401000000000000000000000000000000000000000090046bffffffffffffffffffffffff16911683565b6040805173ffffffffffffffffffffffffffffffffffffffff94851681526bffffffffffffffffffffffff90931660208401529216918101919091526060016100ed565b6101386102a5366004611f95565b610bc5565b6102bd6102b8366004611f4b565b611014565b6040519081526020016100ed565b3480156102d757600080fd5b506101386102e6366004611fc1565b6112b9565b3480156102f757600080fd5b5061016e7f000000000000000000000000000000000000000000000000000000000000000081565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f087648450000000000000000000000000000000000000000000000000000000014806103b257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b600280546103c590611fde565b80601f01602080910402602001604051908101604052809291908181526020018280546103f190611fde565b801561043e5780601f106104135761010080835404028352916020019161043e565b820191906000526020600020905b81548152906001019060200180831161042157829003601f168201915b505050505081565b6000546001146104b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5245454e5452414e43590000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6002600090815573ffffffffffffffffffffffffffffffffffffffff84811682526003602090815260408084208685529091529091208054909116331461055a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4f4e4c595f53454c4c455200000000000000000000000000000000000000000060448201526064016104ae565b80546bffffffffffffffffffffffff8316740100000000000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff91821681811780855560408051938516909217835260a01c6020830152600184015483169082015284918616907f0c294c0a739f71ec000739c4763bc46f863f09ca23f26cd9b293094e13e1be1e9060600160405180910390a3505060016000555050565b600054600114610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5245454e5452414e43590000000000000000000000000000000000000000000060448201526064016104ae565b600260009081556040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff861690636352211e90602401602060405180830381865afa1580156106da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fe9190612032565b90503373ffffffffffffffffffffffffffffffffffffffff821614806107b557506040517fe985e9c500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015233602483015286169063e985e9c590604401602060405180830381865afa158015610791573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b5919061204f565b61081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4f4e4c595f544f4b454e5f4f574e45525f4f525f4f50455241544f520000000060448201526064016104ae565b73ffffffffffffffffffffffffffffffffffffffff85811660008181526003602090815260408083208984528252918290206bffffffffffffffffffffffff881674010000000000000000000000000000000000000000028686168181178084556001840180548b8a167fffffffffffffffffffffffff00000000000000000000000000000000000000009091168117909155865193909816909117825260a01c9281019290925291810193909352918691907fa5bd647f34fcbc80ec242a9c943441939ba9c241c90515e6c49bd8c3207a31479060600160405180910390a35050600160005550505050565b600054600114610974576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5245454e5452414e43590000000000000000000000000000000000000000000060448201526064016104ae565b6002600090815573ffffffffffffffffffffffffffffffffffffffff83811682526003602090815260408084208585529091529091208054909116331480610a7557506040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff841690636352211e90602401602060405180830381865afa158015610a22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a469190612032565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610adb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4f4e4c595f53454c4c45525f4f525f544f4b454e5f4f574e455200000000000060448201526064016104ae565b818373ffffffffffffffffffffffffffffffffffffffff167ffa3f57ecc148dff66af5b7988fd23bb7d42b7c6cf1ac1f4c611980667d88800783604051610b589190815473ffffffffffffffffffffffffffffffffffffffff808216835260a09190911c6020830152600190920154909116604082015260600190565b60405180910390a35073ffffffffffffffffffffffffffffffffffffffff9091166000908152600360209081526040808320938352929052908120818155600190810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559055565b600054600114610c31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5245454e5452414e43590000000000000000000000000000000000000000000060448201526064016104ae565b6002600090815573ffffffffffffffffffffffffffffffffffffffff838116825260036020908152604080842085855282529283902083516060810185528154808516808352740100000000000000000000000000000000000000009091046bffffffffffffffffffffffff1693820193909352600190910154909216928201929092529080610d1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f494e4143544956455f41534b000000000000000000000000000000000000000060448201526064016104ae565b816040015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4f4e4c595f42555945520000000000000000000000000000000000000000000060448201526064016104ae565b60208201516bffffffffffffffffffffffff16348114610e32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f50524943455f4d49534d4154434800000000000000000000000000000000000060448201526064016104ae565b6000610e458686846000620493e061147b565b509050610e53816000611581565b9050610e648382600061c35061171f565b6040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301528481166024830152336044830152606482018790527f000000000000000000000000000000000000000000000000000000000000000016906315dacbea90608401600060405180830381600087803b158015610f0257600080fd5b505af1158015610f16573d6000803e3d6000fd5b50505050848673ffffffffffffffffffffffffffffffffffffffff167f9c826e8c90f6a11429369613c862c10af42611ca3c5d4d4be035765cec439cb586604051610fa49190815173ffffffffffffffffffffffffffffffffffffffff90811682526020808401516bffffffffffffffffffffffff1690830152604092830151169181019190915260600190565b60405180910390a350505073ffffffffffffffffffffffffffffffffffffffff9092166000908152600360209081526040808320938352929052908120818155600190810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055905550565b60003330146110a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f5f68616e646c65526f79616c7479456e67696e655061796f7574206f6e6c792060448201527f73656c662063616c6c61626c650000000000000000000000000000000000000060648201526084016104ae565b6001546040517ff533b80200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301526024820187905260448201869052600092839291169063f533b802906064016000604051808303816000875af1158015611129573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261116f919081019061217e565b8151919350915080611186578593505050506112b1565b85600080805b848110156112a7578681815181106111a6576111a6612243565b602002602001015192508581815181106111c2576111c2612243565b6020026020010151915081841015611236576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f696e736f6c76656e74000000000000000000000000000000000000000000000060448201526064016104ae565b61124483838b61c35061171f565b6040805173ffffffffffffffffffffffffffffffffffffffff8581168252602082018590528d92908f16917f866e6ef8682ddf5f1025e64dfdb45527077f7be70fa9ef680b7ffd8cf4ab9c50910160405180910390a3928190039260010161118c565b5091955050505050505b949350505050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461137e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f736574526f79616c7479456e67696e6541646472657373206f6e6c792072656760448201527f697374726172000000000000000000000000000000000000000000000000000060648201526084016104ae565b6113a8817fcb23f8160000000000000000000000000000000000000000000000000000000061196f565b611434576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f736574526f79616c7479456e67696e6541646472657373206d757374206d617460448201527f63682049526f79616c7479456e67696e65563120696e7465726661636500000060648201526084016104ae565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000808083158061148b57505a84115b6114955783611497565b5a5b6040517f9128c22c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808b166004830152602482018a905260448201899052871660648201529091503090639128c22c90839060840160206040518083038160008887f193505050508015611559575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261155691810190612272565b60015b61156a578560009250925050611577565b9250600191506115779050565b9550959350505050565b6040517f61b485f600000000000000000000000000000000000000000000000000000000815230600482015260248101839052600090819073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906361b485f690604401602060405180830381865afa158015611617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163b9190612272565b90508061164b57839150506103b2565b6040517f86ab6fb90000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906386ab6fb9906024016040805180830381865afa1580156116d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116fb919061228b565b91505061170c81838661c35061171f565b61171682866122cc565b95945050505050565b821580611740575073ffffffffffffffffffffffffffffffffffffffff8416155b1561174a57611969565b73ffffffffffffffffffffffffffffffffffffffff821661194857824710156117f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5f68616e646c654f7574676f696e675472616e7366657220696e736f6c76656e60448201527f740000000000000000000000000000000000000000000000000000000000000060648201526084016104ae565b600081158061180357505a82115b61180d578161180f565b5a5b905060008573ffffffffffffffffffffffffffffffffffffffff16858390604051600060405180830381858888f193505050503d806000811461186e576040519150601f19603f3d011682016040523d82523d6000602084013e611873565b606091505b5050905080611941577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b1580156118e457600080fd5b505af11580156118f8573d6000803e3d6000fd5b5061194193505073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016915088905087611992565b5050611969565b61196973ffffffffffffffffffffffffffffffffffffffff83168585611992565b50505050565b600061197a83611a24565b801561198b575061198b8383611a88565b9392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052611a1f908490611bc4565b505050565b6000611a50827f01ffc9a700000000000000000000000000000000000000000000000000000000611a88565b80156103b25750611a81827fffffffff00000000000000000000000000000000000000000000000000000000611a88565b1592915050565b604080517fffffffff00000000000000000000000000000000000000000000000000000000831660248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f01ffc9a7000000000000000000000000000000000000000000000000000000001790529051600091908290819073ffffffffffffffffffffffffffffffffffffffff87169061753090611b4290869061230a565b6000604051808303818686fa925050503d8060008114611b7e576040519150601f19603f3d011682016040523d82523d6000602084013e611b83565b606091505b5091509150602081511015611b9e57600093505050506103b2565b818015611bba575080806020019051810190611bba919061204f565b9695505050505050565b6000611c26826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cd09092919063ffffffff16565b805190915015611a1f5780806020019051810190611c44919061204f565b611a1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104ae565b60606112b184846000858573ffffffffffffffffffffffffffffffffffffffff85163b611d59576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104ae565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d82919061230a565b60006040518083038185875af1925050503d8060008114611dbf576040519150601f19603f3d011682016040523d82523d6000602084013e611dc4565b606091505b5091509150611dd4828286611ddf565b979650505050505050565b60608315611dee57508161198b565b825115611dfe5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ae9190611ea0565b600060208284031215611e4457600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461198b57600080fd5b60005b83811015611e8f578181015183820152602001611e77565b838111156119695750506000910152565b6020815260008251806020840152611ebf816040850160208701611e74565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b73ffffffffffffffffffffffffffffffffffffffff81168114611f1357600080fd5b50565b600080600060608486031215611f2b57600080fd5b8335611f3681611ef1565b95602085013595506040909401359392505050565b60008060008060808587031215611f6157600080fd5b8435611f6c81611ef1565b935060208501359250604085013591506060850135611f8a81611ef1565b939692955090935050565b60008060408385031215611fa857600080fd5b8235611fb381611ef1565b946020939093013593505050565b600060208284031215611fd357600080fd5b813561198b81611ef1565b600181811c90821680611ff257607f821691505b6020821081141561202c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561204457600080fd5b815161198b81611ef1565b60006020828403121561206157600080fd5b8151801515811461198b57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120e7576120e7612071565b604052919050565b600067ffffffffffffffff82111561210957612109612071565b5060051b60200190565b600082601f83011261212457600080fd5b81516020612139612134836120ef565b6120a0565b82815260059290921b8401810191818101908684111561215857600080fd5b8286015b84811015612173578051835291830191830161215c565b509695505050505050565b6000806040838503121561219157600080fd5b825167ffffffffffffffff808211156121a957600080fd5b818501915085601f8301126121bd57600080fd5b815160206121cd612134836120ef565b82815260059290921b840181019181810190898411156121ec57600080fd5b948201945b8386101561221357855161220481611ef1565b825294820194908201906121f1565b9188015191965090935050508082111561222c57600080fd5b5061223985828601612113565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561228457600080fd5b5051919050565b6000806040838503121561229e57600080fd5b825161ffff811681146122b057600080fd5b60208401519092506122c181611ef1565b809150509250929050565b600082821015612305577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b6000825161231c818460208701611e74565b919091019291505056fea2646970667358221220a66fc9194a6fac8056e4eea7510259312c5a575793a445c6fabc6a4c4c9fe7c864736f6c634300080a0033";

type AsksPrivateEthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AsksPrivateEthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AsksPrivateEth__factory extends ContractFactory {
  constructor(...args: AsksPrivateEthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _erc721TransferHelper: PromiseOrValue<string>,
    _royaltyEngine: PromiseOrValue<string>,
    _protocolFeeSettings: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AsksPrivateEth> {
    return super.deploy(
      _erc721TransferHelper,
      _royaltyEngine,
      _protocolFeeSettings,
      _weth,
      overrides || {}
    ) as Promise<AsksPrivateEth>;
  }
  override getDeployTransaction(
    _erc721TransferHelper: PromiseOrValue<string>,
    _royaltyEngine: PromiseOrValue<string>,
    _protocolFeeSettings: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _erc721TransferHelper,
      _royaltyEngine,
      _protocolFeeSettings,
      _weth,
      overrides || {}
    );
  }
  override attach(address: string): AsksPrivateEth {
    return super.attach(address) as AsksPrivateEth;
  }
  override connect(signer: Signer): AsksPrivateEth__factory {
    return super.connect(signer) as AsksPrivateEth__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AsksPrivateEthInterface {
    return new utils.Interface(_abi) as AsksPrivateEthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AsksPrivateEth {
    return new Contract(address, _abi, signerOrProvider) as AsksPrivateEth;
  }
}
