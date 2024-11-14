import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    fire: {
      chainId: 995,
      url: process.env.FIRE_URL || "",
      accounts: [ process.env.FIRE_DEPLOYER! ],
    }
  },
};

export default config;
