import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import hre from "hardhat";

dotenv.config();

const CONTRACT_ADDRESS = "0xFd9d57E022A28486605392dD694f924ff65D184E"; // Replace with the actual deployed contract address
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

        // ✅ Define contract ABI for `FetchPrice`
        const contractABI = [
            "function get5ireOverUsdt() public view returns (uint256)",
            "function get5ireOverUsd() public view returns (uint256)"
        ];

        // ✅ Create contract instance
        const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, wallet);

        console.log("📡 Fetching 5IRE/USDT price from contract...");

        // ✅ Fetch price 5ire/USDT 
        const price = await contract.get5ireOverUsdt();

        if (!price || price.toString() === "0") {
            console.warn("⚠️ Warning: Retrieved price is 0. Ensure the Oracle has valid data.");
        }

        console.log(`💰 5IRE/USDT Price: ${ethers.formatUnits(price, 18)} USDT`);


        // ✅ Fetch price 5ire/USD
        const priceUSD = await contract.get5ireOverUsd();
        console.log(`💰 5IRE/USD Price: ${ethers.formatUnits(priceUSD, 18)} USD`);
    } catch (error: any) {
        console.error("❌ Error fetching price:", error.reason || error.message || error);
    }
}

// Execute function
fetch5IREUSDTPrice().catch(console.error);


