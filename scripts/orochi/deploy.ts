import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("🚀 Deploying contract with account:", deployer.address);

    const oracleAddress = "0xcAfEc24Fdb365e278bCF873B674CCC340734AE4f"; // 5ireChain Mainnet Oracle

    const ContractFactory = await ethers.getContractFactory("FetchPrice");
    const contract = await ContractFactory.deploy(oracleAddress);

    await contract.waitForDeployment();
    console.log("✅ Contract deployed at:", contract.target);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
});

