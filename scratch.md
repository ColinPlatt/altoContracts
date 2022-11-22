## "AsksV1_1": "0x296419c5ee412823ab21955b838510e6068db895"
## forge verify-contract 0xD3495421e0A09Eeb3b58Ff8A8427BA6b411c3aAe contracts/modules/Offers/V1/OffersV1.sol:OffersV1 --constructor-args $(cast abi-encode "constructor(address,address,address,address,address)" 0xe6eff48f92Dd27164aE097F63D9Cf38d61427ee7 0xff000661227D242A3329F477362CDACf3a78Cb6d 0xc83ebAdD67e024e3B28468D6767A576eeb66e93B 0x4204cE3046cDEE03F79D298A8c7A5553B18C2354 0x826551890Dc65655a0Aceca109aB11AbDbD7a07B) --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch
 
## "OffersV1": "0xd3495421e0a09eeb3b58ff8a8427ba6b411c3aae",
## forge verify-contract 0x296419C5eE412823Ab21955B838510e6068DB895 contracts/modules/Asks/V1.1/AsksV1_1.sol:AsksV1_1 --constructor-args $(cast abi-encode "constructor(address,address,address,address,address)" 0xe6eff48f92Dd27164aE097F63D9Cf38d61427ee7 0xff000661227D242A3329F477362CDACf3a78Cb6d 0xc83ebAdD67e024e3B28468D6767A576eeb66e93B 0x4204cE3046cDEE03F79D298A8c7A5553B18C2354 0x826551890Dc65655a0Aceca109aB11AbDbD7a07B) --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch
 
## "ZoraProtocolFeeSettings": "0x4204cE3046cDEE03F79D298A8c7A5553B18C2354",
## forge verify-contract 0x4204cE3046cDEE03F79D298A8c7A5553B18C2354 contracts/auxiliary/ZoraProtocolFeeSettings/ZoraProtocolFeeSettings.sol:ZoraProtocolFeeSettings --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch
 
## "ZoraModuleManager": "0x4117B4edB7EbfE8A117172547D36237805D57fd9",
## forge verify-contract 0x4117B4edB7EbfE8A117172547D36237805D57fd9 contracts/ZoraModuleManager.sol:ZoraModuleManager --constructor-args $(cast abi-encode "constructor(address,address)" 0xBA7492BDc7C99C201a0310c817eD974184662Ed7 0x4204cE3046cDEE03F79D298A8c7A5553B18C2354 0xc83ebAdD67e024e3B28468D6767A576eeb66e93B 0x4204cE3046cDEE03F79D298A8c7A5553B18C2354 0x826551890Dc65655a0Aceca109aB11AbDbD7a07B) --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch

## "ERC20TransferHelper": "0xe6eff48f92Dd27164aE097F63D9Cf38d61427ee7",
## forge verify-contract 0xe6eff48f92Dd27164aE097F63D9Cf38d61427ee7 contracts/transferHelpers/ERC20TransferHelper.sol:ERC20TransferHelper --constructor-args $(cast abi-encode "constructor(address)" $ZoraModuleManager) --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch


## "ERC721TransferHelper": "0xff000661227D242A3329F477362CDACf3a78Cb6d",
## forge verify-contract 0xff000661227D242A3329F477362CDACf3a78Cb6d contracts/transferHelpers/ERC721TransferHelper.sol:ERC721TransferHelper --constructor-args $(cast abi-encode "constructor(address)" $ZoraModuleManager) --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch

## "ERC1155TransferHelper": "0x8692f9C1b2847af43EC74a09fdc6a5E412153f50",
## forge verify-contract 0x8692f9C1b2847af43EC74a09fdc6a5E412153f50 contracts/transferHelpers/ERC1155TransferHelper.sol:ERC1155TransferHelper --constructor-args $(cast abi-encode "constructor(address)" $ZoraModuleManager) --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch


## "RoyaltyRegistry": "0x5829c7eAc45059bF33164D3E0B7B4Dd945f32782",
## forge verify-contract 0x5829c7eAc45059bF33164D3E0B7B4Dd945f32782 contracts/manifold/RoyaltyRegistry.sol:RoyaltyRegistry --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch

## "RoyaltyEngineV1": "0xc83ebAdD67e024e3B28468D6767A576eeb66e93B",
## forge verify-contract 0xc83ebAdD67e024e3B28468D6767A576eeb66e93B contracts/manifold/RoyaltyEngineV1.sol:RoyaltyEngineV1 --constructor-args $(cast abi-encode "constructor(address)" $RoyaltyEngineV1) --chain-id 7700 --verifier-url https://evm.explorer.canto.io/api --verifier blockscout --watch

#############################
## Scripting ##

forge script script/SettingRoyalties.s.sol:SettingRoyaltiesScript --rpc-url $RPC_URL --broadcast --verify -vvvv