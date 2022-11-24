// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "forge-std/Script.sol";
import "contracts/manifold/overrides/RoyaltyOverride.sol";
import "contracts/manifold/RoyaltyRegistry.sol";
import "contracts/manifold/overrides/RoyaltyOverrideFactory.sol";
import {IEIP2981RoyaltyOverride} from "contracts/manifold/overrides/IRoyaltyOverride.sol";

import {EIP2981RoyaltyOverrideCloneable} from "contracts/manifold/overrides/RoyaltyOverrideCloneable.sol";

struct TokenRoyalty {
        address recipient;
        uint16 bps;
    }



contract SettingRoyaltiesScript_Deploy is Script {

    // we deploy the basic Royalties Override
    EIP2981RoyaltyOverride public overrider;

    // we load the Royalties Registry
    RoyaltyRegistry public registry;


    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        // we going to test this for the woof contract
        address woof = 0xDE7Aa2B085bef0d752AA61058837827247Cc5253;
        address recipientReceiver = 0xF0e4e74Ce34738826477b9280776fc797506fE13;

        IEIP2981RoyaltyOverride.TokenRoyalty memory woofRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(recipientReceiver, uint16(690));

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

contract SettingRoyaltiesScript_SetRoyalty is Script {

    // we deploy the basic Royalties Override
    EIP2981RoyaltyOverride public overrider;

    // we load the Royalties Registry
    RoyaltyRegistry public registry;


    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        // we going to test this for the woof contract
        address woof = 0xDE7Aa2B085bef0d752AA61058837827247Cc5253;
        address recipientReceiver = 0xF0e4e74Ce34738826477b9280776fc797506fE13;

        IEIP2981RoyaltyOverride.TokenRoyalty memory woofRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(recipientReceiver, uint16(690));

        // log this
        registry = RoyaltyRegistry(vm.envAddress("RoyaltyRegistry"));
        overrider = EIP2981RoyaltyOverride(vm.envAddress("RoyaltyOverride"));

        vm.startBroadcast(deployerPrivateKey);

            // deploy the overrider (we own it)
            
            
            // point the registry at overrider for woof
            //registry.setRoyaltyLookupAddress(woof, address(overrider));

            overrider.setDefaultRoyalty(woofRoyalties);

        vm.stopBroadcast();
    }

}

contract SettingRoyaltiesScript_Factory is Script {

    // we deploy the basic Royalties Override
    EIP2981RoyaltyOverrideFactory public overriderFactory;
    EIP2981RoyaltyOverrideCloneable public overriderClone;

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

            overriderClone = new EIP2981RoyaltyOverrideCloneable();
            overriderFactory = new EIP2981RoyaltyOverrideFactory(address(overriderClone));

        vm.stopBroadcast();
    }

}

contract SettingRoyaltiesScript_Clone is Script {

    // we going to test this for the woof contract
        address woof = 0xDE7Aa2B085bef0d752AA61058837827247Cc5253;
        address recipientReceiver = 0xF0e4e74Ce34738826477b9280776fc797506fE13;

        IEIP2981RoyaltyOverride.TokenRoyalty woofRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(recipientReceiver, uint16(690));
        EIP2981RoyaltyOverrideFactory public overriderFactory = EIP2981RoyaltyOverrideFactory(vm.envAddress("RoyaltyOverrideFactory"));

        address woofClone = 0x0F804217b8BF1979a29681fAe501ef3A9bAAc46F;

        // we call the deployed Royalties Override Clone
        EIP2981RoyaltyOverrideCloneable public newClone = EIP2981RoyaltyOverrideCloneable(woofClone);

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

            address overriderClone = overriderFactory.createOverride();

        vm.stopBroadcast();
    }

}

contract SettingRoyaltiesScript_Woof is Script {

    // we going to test this for the woof contract
    address woof = 0xDE7Aa2B085bef0d752AA61058837827247Cc5253;
    address recipientReceiver = 0xF0e4e74Ce34738826477b9280776fc797506fE13;

    IEIP2981RoyaltyOverride.TokenRoyalty woofRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(recipientReceiver, uint16(690));
    EIP2981RoyaltyOverrideFactory public overriderFactory = EIP2981RoyaltyOverrideFactory(vm.envAddress("RoyaltyOverrideFactory"));
    // we load the Royalties Registry
    RoyaltyRegistry public registry = RoyaltyRegistry(vm.envAddress("RoyaltyRegistry"));

    address woofClone = 0x0F804217b8BF1979a29681fAe501ef3A9bAAc46F;

    // we call the deployed Royalties Override Clone
    EIP2981RoyaltyOverrideCloneable public newClone = EIP2981RoyaltyOverrideCloneable(woofClone);

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

            // define defaults
            newClone.setDefaultRoyalty(woofRoyalties);

            // link to registry
            registry.setRoyaltyLookupAddress(woof, address(newClone));

        vm.stopBroadcast();
    }

}


contract SettingRoyaltiesScript_Adds0 is Script {

    // common
    EIP2981RoyaltyOverrideFactory public overriderFactory = EIP2981RoyaltyOverrideFactory(vm.envAddress("RoyaltyOverrideFactory"));
    RoyaltyRegistry public registry = RoyaltyRegistry(vm.envAddress("RoyaltyRegistry"));

    // og
    address og = 0x1379b2dFa9918F302B6f74A26360fa6C9bF297f9;
    address ogRecipientReceiver = 0x07C12A35F8e0e3a944bcbBc04650446A7b618bd8;
    uint16 ogRoyalty = 690;
    IEIP2981RoyaltyOverride.TokenRoyalty ogRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(ogRecipientReceiver, ogRoyalty);

    // necks
    address necks = 0xC0C73CcFEE66eb400acCee23Fe70369186e4D3C9;
    address necksRecipientReceiver = 0xEafcbC638b7B45f3Ef20113F113F7bAbBB74eE03;
    uint16 necksRoyalty = 500;
    IEIP2981RoyaltyOverride.TokenRoyalty necksRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(necksRecipientReceiver, necksRoyalty);
    


    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

            //og - 0xd19c437fe0402ef26e9f49858ebec8df9ceb4b10
            EIP2981RoyaltyOverrideCloneable ogClone = EIP2981RoyaltyOverrideCloneable(overriderFactory.createOverride());
            ogClone.setDefaultRoyalty(ogRoyalties);
            registry.setRoyaltyLookupAddress(og, address(ogClone));

            //necks - 0x6c269c3b321f79e82a793707c87a3d4e52f99bf3
            EIP2981RoyaltyOverrideCloneable necksClone = EIP2981RoyaltyOverrideCloneable(overriderFactory.createOverride());
            necksClone.setDefaultRoyalty(necksRoyalties);
            registry.setRoyaltyLookupAddress(necks, address(necksClone));

        vm.stopBroadcast();
    }

}

contract SettingRoyaltiesScript_Adds1 is Script {

    // common
    EIP2981RoyaltyOverrideFactory public overriderFactory = EIP2981RoyaltyOverrideFactory(vm.envAddress("RoyaltyOverrideFactory"));
    RoyaltyRegistry public registry = RoyaltyRegistry(vm.envAddress("RoyaltyRegistry"));

    // waifus
    address waifus = 0x1371c76E09dE58d15FC15A319E71f8Da2f62CF7B;
    address waifusOld = 0x20DD43Dfedc8Af2046657A84A47bF832a8825a7a;
    address waifusRecipientReceiver = 0x6B38b2f7f357CF97Bd58Eb5D2f94e3cDc8A7e70c;
    uint16 waifusRoyalty = 690;
    IEIP2981RoyaltyOverride.TokenRoyalty waifusRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(waifusRecipientReceiver, waifusRoyalty);

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

            //waifus - 0x1371c76E09dE58d15FC15A319E71f8Da2f62CF7B
            EIP2981RoyaltyOverrideCloneable waifusClone = EIP2981RoyaltyOverrideCloneable(overriderFactory.createOverride());
            waifusClone.setDefaultRoyalty(waifusRoyalties);
            registry.setRoyaltyLookupAddress(waifus, address(waifusClone));
            registry.setRoyaltyLookupAddress(waifusOld, address(waifusClone));

        vm.stopBroadcast();
    }

}

contract SettingRoyaltiesScript_Adds2 is Script {

    // common
    EIP2981RoyaltyOverrideFactory public overriderFactory = EIP2981RoyaltyOverrideFactory(vm.envAddress("RoyaltyOverrideFactory"));
    RoyaltyRegistry public registry = RoyaltyRegistry(vm.envAddress("RoyaltyRegistry"));

    // jackie
    address jackie = 0x79Cb916Add1dCb55049a610Fed35dD60aD30d219;
  

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

            //og - 0xd19C437FE0402Ef26e9F49858ebEC8Df9ceb4b10
            registry.setRoyaltyLookupAddress(jackie, address(0xd19C437FE0402Ef26e9F49858ebEC8Df9ceb4b10));


        vm.stopBroadcast();
    }

}

contract SettingRoyaltiesScript_Adds3 is Script {

    // common
    EIP2981RoyaltyOverrideFactory public overriderFactory = EIP2981RoyaltyOverrideFactory(vm.envAddress("RoyaltyOverrideFactory"));
    RoyaltyRegistry public registry = RoyaltyRegistry(vm.envAddress("RoyaltyRegistry"));

    // toes
    address toes = 0x21950FC9409343AA1120D275D819A6d5A7e6CcB3;
    address toesRecipientReceiver = 0x1D1EA8f4cb924af9747608bE636cF7346915b210;
    uint16 toesRoyalty = 500;
    IEIP2981RoyaltyOverride.TokenRoyalty toesRoyalties = IEIP2981RoyaltyOverride.TokenRoyalty(toesRecipientReceiver, toesRoyalty);

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

            //toes - 0x1281d99a2b50c33a0b26c87b6c021dbf5e163ab2
            EIP2981RoyaltyOverrideCloneable toesClone = EIP2981RoyaltyOverrideCloneable(overriderFactory.createOverride());
            toesClone.setDefaultRoyalty(toesRoyalties);
            registry.setRoyaltyLookupAddress(toes, address(toesClone));

        vm.stopBroadcast();
    }

}