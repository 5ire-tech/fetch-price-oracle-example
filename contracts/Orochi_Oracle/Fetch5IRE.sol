// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.22;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@orochi-network/contracts/IOrocleAggregatorV2.sol";

contract Fetch5IRE is Ownable {
    IOrocleAggregatorV2 private orocle;

    event SetOrocle(address indexed oldOrocle, address indexed newOrocle);

    constructor(address orocleAddress) Ownable(msg.sender) {
        _setOrocle(orocleAddress);
    }

    function _setOrocle(address newOrocle) internal {
        emit SetOrocle(address(orocle), newOrocle);
        orocle = IOrocleAggregatorV2(newOrocle);
    }

    function _getPrice(bytes20 identifier) internal view returns (uint256) {
        return uint256(orocle.getLatestData(1, identifier));
    }

    function _getPriceOfPair(
        bytes20 srcToken,
        bytes20 dstToken
    ) internal view returns (uint256) {
        return (_getPrice(srcToken) * 10 ** 18) / (_getPrice(dstToken));
    }

    function setOrocle(address newOrocle) external onlyOwner returns (bool) {
        _setOrocle(newOrocle);
        return true;
    }
}
