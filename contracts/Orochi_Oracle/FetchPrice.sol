// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.22;

import "./Fetch5IRE.sol";

contract FetchPrice is Fetch5IRE {
    constructor(address provider) Fetch5IRE(provider) {}

    function estimate(uint256 amount) external view returns (uint256 total) {
        total = _getPrice("5IRE") * amount;
    }

    function get5ireOverUsdt() external view returns (uint256 price) {
        price = _getPrice("5IRE");
    }

    function get5ireOverUsd() external view returns (uint256 price) {
        price = _getPriceOfPair("5IRE", "USD");
    }
}
