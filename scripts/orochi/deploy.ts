import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("🚀 Deploying contract with account:", deployer.address);

    const oracleAddress = "0x3E36123bAE1d9EB392C32849324D093a45CEDd7F"; // 5ireChain Testnet Oracle

    const ContractFactory = await ethers.getContractFactory("Fetch5IREUSDT");
    const contract = await ContractFactory.deploy(oracleAddress);

    await contract.waitForDeployment();
    console.log("✅ Contract deployed at:", contract.target);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
});

