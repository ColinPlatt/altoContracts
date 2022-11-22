// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "forge-std/Script.sol";
import "contracts/manifold/overrides/RoyaltyOverride.sol";
import "contracts/manifold/RoyaltyRegistry.sol";

/*
struct TokenRoyalty {
        address recipient;
        uint16 bps;
    }

    */

contract SettingRoyaltiesScript is Script {

    // we deploy the basic Royalties Override
    EIP2981RoyaltyOverride public overrider;

    // we load the Royalties Registry
    RoyaltyRegistry public registry;

    

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        // we going to test this for the woof contract
        address woof = 0xDE7Aa2B085bef0d752AA61058837827247Cc5253;
        address recipientReceiver = 0xF0e4e74Ce34738826477b9280776fc797506fE13;


        TokenRoyalty memory woofRoyalties = TokenRoyalty(recipientReceiver, uint16(690));

        // log this
        registry = RoyaltyRegistry(vm.envAddress("RoyaltyRegistry"));

        vm.startBroadcast(deployerPrivateKey);

            // deploy the overrider (we own it)
            overrider = new EIP2981RoyaltyOverride();
            
            // point the registry at overrider for woof
            registry.setRoyaltyLookupAddress(woof, address(overrider));

            overrider.setDefaultRoyalty(woofRoyalties);

        vm.stopBroadcast();
    }

}