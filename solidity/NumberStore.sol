// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.0;

contract NumberStorage {
      uint a = 2;
      uint b = 9;
      uint num;

    function setNumber(uint _num) public {
        num = _num;
    }
    function getNumber() public view returns (uint) {
        return num;
    }
    function add () public view returns (uint){
        return a - b;
    }
}