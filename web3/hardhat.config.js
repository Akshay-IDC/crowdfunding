
// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: "bnbt",
    networks: {
      hardhat:{},
      bnbt:{
        url: "https://binance-testnet.rpc.thirdweb.com",
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
