require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  networks: {
    thunder: {
      url: "https://rpc.testnet.5ire.network", // RPC endpoint for 5ire
      chainId: 997, // Chain ID for 5ire Testnet
      accounts: [process.env.PRIVATE_KEY] // Replace with your private key
    },
  },
  etherscan: {
    apiKey: {
      thunder: "355MY1P6JGB8IJS8AYUR1PU35K7SHFFBMN",
    },
    customChains: [
      {
        network: "thunder",
        chainId: 997,
        urls: {
          apiURL: "https://contract.evm.testnet.5ire.network/5ire/verify",
          browserURL: "https://testnet.5irescan.io/dashboard"
        }
      }
    ]
  }
};

