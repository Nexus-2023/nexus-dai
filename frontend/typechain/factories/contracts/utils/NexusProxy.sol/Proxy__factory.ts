/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Proxy,
  ProxyInterface,
} from "../../../../contracts/utils/NexusProxy.sol/Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "constructData",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "contractLogic",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ConstructorFailed",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementation",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161031238038061031283398101604081905261002f91610134565b610057817fc5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf755565b600080826001600160a01b03168460405161007291906101f3565b600060405180830381855af49150503d80600081146100ad576040519150601f19603f3d011682016040523d82523d6000602084013e6100b2565b606091505b5091509150816100d557604051631d5baad960e11b815260040160405180910390fd5b5050505061020f565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561010f5781810151838201526020016100f7565b50506000910152565b80516001600160a01b038116811461012f57600080fd5b919050565b6000806040838503121561014757600080fd5b82516001600160401b038082111561015e57600080fd5b818501915085601f83011261017257600080fd5b815181811115610184576101846100de565b604051601f8201601f19908116603f011681019083821181831017156101ac576101ac6100de565b816040528281528860208487010111156101c557600080fd5b6101d68360208301602088016100f4565b80965050505050506101ea60208401610118565b90509250929050565b600082516102058184602087016100f4565b9190910192915050565b60f58061021d6000396000f3fe608060405260043610601f5760003560e01c8063aaf10f4214603157602b565b36602b576029607b565b005b6029607b565b348015603c57600080fd5b507fc5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7546040516001600160a01b03909116815260200160405180910390f35b36600080376000803660007fc5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7545af43d6000803e80801560ba573d6000f35b3d6000fdfea264697066735822122092212ebc6fd95231f2b06454e0535e5f9fb1099cf44b9c61f0f4725a7df0bef064736f6c63430008130033";

type ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Proxy__factory extends ContractFactory {
  constructor(...args: ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    constructData: BytesLike,
    contractLogic: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      constructData,
      contractLogic,
      overrides || {}
    );
  }
  override deploy(
    constructData: BytesLike,
    contractLogic: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      constructData,
      contractLogic,
      overrides || {}
    ) as Promise<
      Proxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Proxy__factory {
    return super.connect(runner) as Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyInterface {
    return new Interface(_abi) as ProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Proxy {
    return new Contract(address, _abi, runner) as unknown as Proxy;
  }
}
