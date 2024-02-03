// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Enum {
     mapping ( address => uint) public balances;

     function  setBalance( address _waAddress, uint _balance) public {
        balances[_waAddress] = _balance;
     }

     function getBalance(address _getAddress) public view returns (uint) {
        return balances[ _getAddress];
     }
}