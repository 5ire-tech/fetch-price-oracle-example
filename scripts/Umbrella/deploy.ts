import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config(); 

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("🚀 Deploying contract with account:", deployer.address);

    const UmbrellaAdapter = await ethers.getContractFactory("UmbrellaAdapter");
    const contract = await UmbrellaAdapter.deploy();

    await contract.waitForDeployment();
    console.log("✅ UmbrellaAdapter deployed at:", contract.target);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
});

