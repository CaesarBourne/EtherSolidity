//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CaesarsToken is ERC20 {
    constructor() ERC20("Caesar", "CAE") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function caesarMint(uint quantity) public {
        _mint(msg.sender, quantity);
    }

    function caesarBurn(uint quantity) public {
        _burn(msg.sender, quantity);
    }
}
