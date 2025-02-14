// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./IUmbrellaFeeds.sol";
import "./IRegistry.sol";

contract UmbrellaPriceFetcher {
    IRegistry public immutable registry;
    IUmbrellaFeeds public umbrellaFeeds;

    bytes32 private constant FIVEIRE_USD = keccak256("5IRE/USD");
    bytes32 private constant BTC_USD = keccak256("BTC/USD");
    bytes32 private constant ETH_USD = keccak256("ETH/USD");

    error EmptyAddress();
    error FeedNotAvailable(bytes32 key);

    event PriceFetched(bytes32 indexed key, uint128 price, uint32 timestamp);

    constructor(address _registryAddress) {
        if (_registryAddress == address(0)) revert EmptyAddress();
        registry = IRegistry(_registryAddress);
        address umbrellaFeedsAddress = registry.requireAndGetAddress(
            "UmbrellaFeeds"
        );
        if (umbrellaFeedsAddress == address(0)) revert EmptyAddress();
        umbrellaFeeds = IUmbrellaFeeds(umbrellaFeedsAddress);
    }

    function getPrice(
        bytes32 key
    ) public view returns (uint128 price, uint32 timestamp) {
        (bool success, bytes memory data) = address(umbrellaFeeds).staticcall(
            abi.encodeWithSelector(
                IUmbrellaFeeds.getPriceTimestamp.selector,
                key
            )
        );

        if (success && data.length == 64) {
            (price, timestamp) = abi.decode(data, (uint128, uint32));
            if (timestamp == 0) revert FeedNotAvailable(key);
        } else {
            revert FeedNotAvailable(key);
        }
    }

    function getPriceWithDecimals(
        bytes32 key
    ) external view returns (uint256 price, uint8 decimals) {
        (uint128 rawPrice, ) = getPrice(key);
        decimals = umbrellaFeeds.DECIMALS();
        price = uint256(rawPrice);
    }

    function get5IREPrice()
        external
        view
        returns (uint128 price, uint32 timestamp)
    {
        return getPrice(FIVEIRE_USD);
    }

    function getBTCPrice()
        external
        view
        returns (uint128 price, uint32 timestamp)
    {
        return getPrice(BTC_USD);
    }

    function getETHPrice()
        external
        view
        returns (uint128 price, uint32 timestamp)
    {
        return getPrice(ETH_USD);
    }
    function getUmbrellaFeedsAddress() external view returns (address) {
        return address(umbrellaFeeds);
    }
    function isPriceFeedAvailable(bytes32 key) external view returns (bool) {
        (bool success, bytes memory data) = address(umbrellaFeeds).staticcall(
            abi.encodeWithSelector(
                IUmbrellaFeeds.getPriceTimestamp.selector,
                key
            )
        );
        return success && data.length == 64;
    }
}
