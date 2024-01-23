// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Example {


//Bytes start 

bytes1 a = 0x12;
bytes2 b = 0x1234;

  
   function compare() public view returns(bool) {
       return b > a;
   }
 
   function bitOperations() public view returns(bytes2) {
       return a & b;
   }
 
   function leftShift() public view returns(bytes1) {
       return a << 1;
   }
 
   function returnAtIndex(uint _index) public view returns(bytes1) {
       return b[_index];
   }

//Bytes end
//address start
// address locationOne;
// address locationtwo;

// function compareAddresses (address _loOne, address _loTwo) public pure returns (bool){

//     return  _loOne == _loTwo;
// }
// function getBalance(address _account) public view returns(uint){
//     return _account.balance;
// }
//address tut end

    // uint8 public val;
    // bool check; 
    // string message;


// function setMessage(string calldata _messageInput) public {
//     message = _messageInput;
// }
// function getMessage () public view returns (string memory){
//     return message;
// }

// function getMessageLength() public view returns( uint){
//     return bytes(message).length;
// }
    // function checkGreater(uint a, uint b) public {
    //     check = a > b;
    // }
    // function getValue () public view returns (bool){
    //     return  check;
    // }
    // function increment() public{
    //     unchecked{val ++;}
    // }

    // function decrement () public {
    //    unchecked{val --;}
    // }
}

