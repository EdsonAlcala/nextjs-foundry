//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {SimpleStorage} from "../contracts/SimpleStorage.sol";

import "forge-std/Script.sol";

contract DeployScript is Script {
    string constant DEFAULT_MNEMONIC = "test test test test test test test test test test test junk";

    function run() external {
        string memory mnemonic = vm.envString("MNEMONIC");

        if (bytes(mnemonic).length == 0) {
            mnemonic = DEFAULT_MNEMONIC;
        }

        uint256 deployerPrivateKey = vm.deriveKey(mnemonic, 0);
        address deployer = vm.rememberKey(deployerPrivateKey);

        vm.startBroadcast(deployer);

        SimpleStorage simpleStorage = new SimpleStorage();
        console.logString(string.concat("SimpleStorage deployed at: ", vm.toString(address(simpleStorage))));

        vm.stopBroadcast();

        // export deployment
    }
}
