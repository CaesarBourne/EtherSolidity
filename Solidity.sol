// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Example {
    bool check;
    uint8 public val;

    //address start
    address locationOne;
    address locationtwo;

    function compareAddresses(
        address _loOne,
        address _loTwo
    ) public pure returns (bool) {
        return _loOne == _loTwo;
    }

    function getBalance(address _account) public view returns (uint) {
        return _account.balance;
    }

    //address tut end

    function checkGreater(uint a, uint b) public {
        check = a > b;
    }

    function getValue() public view returns (bool) {
        return check;
    }

    function increment() public {
        unchecked {
            val++;
        }
    }

    function decrement() public {
        unchecked {
            val--;
        }
    }
}
