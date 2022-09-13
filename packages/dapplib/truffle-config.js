require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain comic gloom clinic brown sport'; 
let testAccounts = [
"0xc394c31435352a6de4b4903770b9d4f64d3528a4c059eef19c46dee3d501ae13",
"0x7abeeec780866369001b4ffd08a0c292505cd96bff8b4ee87ee62b3ccdfa2f88",
"0xf49af3245737109777c33cf89bdb2a2fb392811cadcb02df34b194a44706f69b",
"0x1ce1f74dde7159ad173cbfe4593dbc11c88e94934d8fcdd7194ac6bd62015fe7",
"0xd380eef8dcf308fbe186dc930997822186a16d71e74ecd7f1ead4e3e8dabb572",
"0x9952d74787791b1da0fee4e80a33d9afb113c91f5afbe242c068b700c9eeeb8a",
"0xd8e3479ac097e1218055bdbb9a113c99e7518c293bd409477fae10bf26629265",
"0x9ac922a97e4829933b4037ad3620616868b787496345970e5f945d7252fa7140",
"0x272f890c838512f5eeea30a14d7aeb423d36e07d101e28503856574ae4ae4c34",
"0xd185fa91cfada9b4c4bd44eb71a9087dfbfc781cb2e9018bccf3cc22ccad60e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

