//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import {sDAIBridge} from "../sDAIBridge.sol";

contract BridgeTest is sDAIBridge{

    event EthReceived(uint256 amount);
    constructor(address nexus){
        Nexus = nexus;
    }
    receive() external payable{
        emit EthReceived(msg.value);
    }
}