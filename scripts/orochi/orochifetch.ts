import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import hre from "hardhat";

dotenv.config();

const CONTRACT_ADDRESS = "0xF2F4C646571c0DbF5D388E9FD5b15d02A5381af5"; // Replace with the actual deployed contract address
const PRIVATE_KEY = process.env.PRIVATE_KEY as string; // 

async function fetch5IREUSDTPrice() {
    if (!CONTRACT_ADDRESS || !PRIVATE_KEY) {
        console.error("❌ Missing CONTRACT_ADDRESS or PRIVATE_KEY. Please check your .env file.");
        return;
    }

    try {
        // ✅ Get provider from Hardhat config
        const provider = new ethers.JsonRpcProvider(hre.network.config.url);

        // ✅ Connect wallet with provider
        const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

        // ✅ Define contract ABI for `FiveIREUSDTConverter`
        const contractABI = [
            "function usdtOver5IRE() public view returns (uint256)"
        ];

        // ✅ Create contract instance
        const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, wallet);

        console.log("📡 Fetching 5IRE/USDT price from contract...");

        // ✅ Fetch price
        const price = await contract.usdtOver5IRE();

        if (!price || price.toString() === "0") {
            console.warn("⚠️ Warning: Retrieved price is 0. Ensure the Oracle has valid data.");
        }

        console.log(`💰 5IRE/USDT Price: ${ethers.formatUnits(price, 18)} USDT`);
    } catch (error: any) {
        console.error("❌ Error fetching price:", error.reason || error.message || error);
    }
}

// Execute function
fetch5IREUSDTPrice().catch(console.error);


