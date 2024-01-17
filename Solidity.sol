// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Example {
    bool check;
    uint8 public val;

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
