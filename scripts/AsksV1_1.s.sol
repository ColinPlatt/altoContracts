// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "forge-std/Script.sol";
import "../contracts/modules/Asks/V1.1/AsksV1_1.sol";


contract AsksV1_1Script is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        address _envErc20TransferHelper = vm.envAddress("ERC20TransferHelper");
        address _envErc721TransferHelper = vm.envAddress("ERC721TransferHelper");
        address _envRoyaltyEngine = vm.envAddress("RoyaltyEngineV1");
        address _envProtocolFeeSettings = vm.envAddress("ZoraProtocolFeeSettings");
        address _envWethAddress = vm.envAddress("WCANTO");


        vm.startBroadcast(deployerPrivateKey);

        AsksV1_1 asks = new AsksV1_1(
            _envErc20TransferHelper,
            _envErc721TransferHelper,
            _envRoyaltyEngine,
            _envProtocolFeeSettings,
            _envWethAddress
        );

        

        vm.stopBroadcast();
    }
}
