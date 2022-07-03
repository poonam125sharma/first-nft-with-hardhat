// SPDX-License-Identifier: MIT
// Tell Ethereum which Solidity version to use when running this code
pragma solidity ^0.8.0;

// Import the Standard Implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Contract 'NFTee' _IS_ an 'ERC721' contract
contract NFTee is ERC721 {

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        _mint(msg.sender, 1);
    }
}
