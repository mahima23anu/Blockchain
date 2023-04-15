// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.7.0;

contract DataStorage {
    string public storedData;

    function storeData(string memory data) public {
        storedData = data;
    }
}
