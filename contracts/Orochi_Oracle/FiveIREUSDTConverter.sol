// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.22;

import "./Fetch5IREUSDT.sol";

contract FiveIREUSDTConverter is Fetch5IREUSDT {
    constructor(address provider) Fetch5IREUSDT(provider) {}

    function estimate(uint256 amount) external view returns (uint256 total) {
        total = _getPrice(bytes20("5IRE")) * amount;
    }

    function usdtOver5IRE() external view returns (uint256 price) {
        price = _getPriceOfPair(
            bytes20(keccak256("5IRE")),
            bytes20(keccak256("USDT"))
        );
    }
}
