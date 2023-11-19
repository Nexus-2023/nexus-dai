# Nexus Dai

Any protocol can use this to earn stable returns on the DAI present on their bridge contract

## Folders

To make the project work, following functionalities were developed during hackathon:
#### Contracts:
- **nexus-dai**: This contract registers all the bridges that wants to integrate and also helps in managing the bridge functionalities like claiming of rewards and changing saving limits
**Code**: https://github.com/Nexus-2023/nexus-dai/blob/main/contracts/contracts/Nexus.sol
**Deployed Contract**: https://goerli.etherscan.io/address/0x4b3BF56a59E935C6296E84605e6676202348B98b
- **sDAIbridge**: this contract is imported by the bridge contracts. It enables them to transfer the %age balance set by them on nexus-dai contract
**Code**: https://github.com/Nexus-2023/nexus-dai/blob/main/contracts/contracts/sDAIBridge.sol
**Deployed Contract**: For testing the system out we deployed in on Mantle bridge. Same integration could be used for any contract containing DAI
https://goerli.etherscan.io/address/0xe2B13b61ae85638f01E1BdFefAC02AEbB5b7E003
		**Mantle Contract Changes**: https://github.com/Nexus-2023/nexus-dai/blob/main/contracts/contracts/testBridges/messaging/L1StandardBridge.sol
#### Subgraph:
Subgraph is used to query all the events emitted from the contracts and stores a summary of the system. It is used by automation bot to fetch the data
- **Code**: https://github.com/Nexus-2023/nexus-dai/tree/main/subgraph-dai
- **Published URL**: https://testnet.thegraph.com/explorer/subgraphs/UWbbufqcAnBPYtdnVQAX9nRCv2gFFRpLgEY8UidZ6dK?view=Playground&chain=sepolia
- **Subgraph studio**: https://thegraph.com/studio/subgraph/nexus-sdai/playground/
#### Automation bot
 This is used to monitor the bridge contract and trigger the deposit and withdraw of DAI from bridge to sDAI contract whenever there is limit change.
- **Code**: https://github.com/Nexus-2023/nexus-dai/blob/main/automation_bot/main.py
#### Frontend
[frontend](https://nexus-dai.vercel.app/) 
This can be used to interact with the system and have an overview of the integration
- **Code**: https://github.com/Nexus-2023/nexus-dai/tree/main/frontend
