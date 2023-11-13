// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "forge-std/Test.sol";

import {SimpleStorage} from "@contracts/SimpleStorage.sol";

contract SimpleStorageTest is Test {
    SimpleStorage simpleStorage;

    function setUp() public {
        simpleStorage = new SimpleStorage();
    }

    function test_setData() public {
        uint256 newValue = 42;

        simpleStorage.setData(newValue);

        assertEq(simpleStorage.storedData(), newValue);
    }
}
