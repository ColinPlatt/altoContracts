// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "forge-std/Script.sol";

import "../contracts/modules/ReserveAuction/Core/ERC20/ReserveAuctionCoreErc20.sol";
import "../contracts/modules/ReserveAuction/Core/ETH/ReserveAuctionCoreEth.sol";
import "../contracts/modules/ReserveAuction/Finders/ERC20/ReserveAuctionFindersErc20.sol";
import "../contracts/modules/ReserveAuction/Finders/ETH/ReserveAuctionFindersEth.sol";
import "../contracts/modules/ReserveAuction/Listing/ERC20/ReserveAuctionListingErc20.sol";
import "../contracts/modules/ReserveAuction/Listing/ETH/ReserveAuctionListingEth.sol";


contract ReserveAuctionScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        address _envErc20TransferHelper = vm.envAddress("ERC20TransferHelper");
        address _envErc721TransferHelper = vm.envAddress("ERC721TransferHelper");
        address _envRoyaltyEngine = vm.envAddress("RoyaltyEngineV1");
        address _envProtocolFeeSettings = vm.envAddress("ZoraProtocolFeeSettings");
        address _envWethAddress = vm.envAddress("WCANTO");


        vm.startBroadcast(deployerPrivateKey);

        new ReserveAuctionCoreErc20(
            _envErc20TransferHelper,
            _envErc721TransferHelper,
            _envRoyaltyEngine,
            _envProtocolFeeSettings,
            _envWethAddress
        );

        new ReserveAuctionCoreEth(
            _envErc721TransferHelper,
            _envRoyaltyEngine,
            _envProtocolFeeSettings,
            _envWethAddress
        );

        new ReserveAuctionFindersErc20(
            _envErc20TransferHelper,
            _envErc721TransferHelper,
            _envRoyaltyEngine,
            _envProtocolFeeSettings,
            _envWethAddress
        );

        new ReserveAuctionFindersEth(
            _envErc721TransferHelper,
            _envRoyaltyEngine,
            _envProtocolFeeSettings,
            _envWethAddress
        );

        new ReserveAuctionListingErc20(
            _envErc20TransferHelper,
            _envErc721TransferHelper,
            _envRoyaltyEngine,
            _envProtocolFeeSettings,
            _envWethAddress
        );

        new ReserveAuctionListingEth(
            _envErc721TransferHelper,
            _envRoyaltyEngine,
            _envProtocolFeeSettings,
            _envWethAddress
        );

        

        vm.stopBroadcast();
    }
}
