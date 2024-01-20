// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ConstructorExample {
    uint price;
    address owner;

    constructor(uint _price) {
        owner = msg.sender;
        price = _price;
    }

    function setPrice(uint _customPrice) public {
        require(msg.sender == owner);
        price = _customPrice;
    }

    function getPrice() public view returns (uint) {
        return price;
    }
}
