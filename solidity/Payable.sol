// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Payabale {
    address payable public owner;
    bool paid;

    constructor(){
        owner = payable (msg.sender);
    }
    function receiveMoney () public payable {
        require(msg.value == 0.1 ether, "The amount is not enough");
        paid = true;
    }

    // function withdraw() public payable  {
    //     require(msg.sender == owner, "You dont have right to send ");
    //    owner.transfer(address(this).balance);
    // }

    function withdraw() public {
    require(msg.sender == owner, "Only owner can execute withdrawal!");
    bool sent = owner.send(address(this).balance);
    require(sent, "Failure to send Ether.");
 }

}