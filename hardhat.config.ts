require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  networks: {
    thunder: {
      url: "https://rpc.testnet.5ire.network", // RPC endpoint for 5ire Testnet
      chainId: 997, // Chain ID for 5ire Testnet
      accounts: [process.env.PRIVATE_KEY] // Replace with your private key or create .env file and put there your private key for security
    },
    fire: {
      url: "https://rpc.5ire.network/", //RPC endpoint for 5ire Mainnet
      chainId: 995, // Chain ID for 5ire Mainnet
      accounts: [process.env.PRIVATE_KEY] // Replace with your private key or create .env file and put there your private key for security
    }
  },
  etherscan: {
    apiKey: {
      thunder: "", //REPLACE WITH YOUR API KEY FROM ETHERSCAN FOR VERIFICATION
      fire: process.env.FIRE_API_KEY // Add your FIRE API key in .env
    },
    customChains: [
      {
        network: "thunder",
        chainId: 997,
        urls: {
          apiURL: "https://contract.evm.testnet.5ire.network/5ire/verify",
          browserURL: "https://testnet.5irescan.io/dashboard"
        }
      },
      {
        network: "fire",
        chainId: 995,
        urls: {
          apiURL: "https://contract.evm.scan.5ire.network/5ire/verify",
          browserURL: "https://5irescan.io/"
        }
      },
    ]
  }
};
