require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar public grace force frame tuna'; 
let testAccounts = [
"0x889432a6cf970222a026ed2f03c56432e324b2257f924cb014725c233446acc8",
"0xc59e103aa08f68af15eb7e93d4e927fa250cd868b5fe840fd14e92b247d9d60e",
"0xd79399ee264c27ed22e7d7ea50caa19e99043a9305a8a0898aeb259fdfe73284",
"0xa19e22731a183b05f26b8006853e31dcce62999f20b7de49913654e91c647cd0",
"0xd75018684956c255876786d1a9b6dfd43cb936bf735cfa095ddfe83448e20696",
"0x17ca65b4c8e7cf36790e5730e4eaa2787edc770619bf60503f68952285f175e3",
"0xe38f912b77dd8d1c9003415b10c1258c8be65701bb6cfd629e51b8f7444d6c0f",
"0xc1dd1bd9342ff5ecfc484de79cd48aceaf96eee2ccb1ec7ca98bba11ac056ebd",
"0xd72f36a11b6b521df795cf37ea53246ec5bd3ecddfb56e1d1ec8a7f860dbd33a",
"0xc38a0a1ba504d595021202dda4fe779c2a9296664dea17053109a9f867aa921f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


