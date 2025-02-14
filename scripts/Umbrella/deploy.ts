import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("🚀 Deploying contract with account:", deployer.address);

    const ContractFactory = await ethers.getContractFactory("UmbrellaPriceFetcher");
    const contract = await ContractFactory.deploy("0xb0564b9dc9818cc8D51bA4562Dd3c694eABb2eB2");

    await contract.waitForDeployment();
    console.log("✅ PriceFetcher deployed at:", contract.target);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
});

