// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract OtakuVerse is ERC721URIStorage{
    uint256 private _tokenIds = 0; // Initialize token ID counter

    constructor() ERC721("Otaku Verse", "OTV") {}

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        _tokenIds += 1; // Increment the token ID
        uint256 newItemId = _tokenIds;
        
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        return newItemId;
    }
}
