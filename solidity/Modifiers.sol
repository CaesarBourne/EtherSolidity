// SPDX-License-Identifier: MIT
 pragma solidity 0.8.7;
 
 contract Modifier {


    address a;
    address owner = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    function example1() public {
        require(msg.sender == owner);
        a = msg.sender;
    }

//this function uses the chek emma functionality to validate input
function checkEmma() emmanuel public {

}
    modifier emmanuel {
        require(msg.sender == owner);
        _;
    }
 

//   address owner = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
//   address a;
//   address b;
//   address c;
 
//   function example1() public {
//       require(msg.sender == owner);
//       a = msg.sender;
//   }
 
//   function example2() public {
//       require(msg.sender == owner);
//       b = msg.sender;
//   }
 
//   function example3() public {
//       require(msg.sender == owner);
//       c = msg.sender;
//   }
 }