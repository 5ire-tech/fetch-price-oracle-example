import { ethers } from "hardhat"; // Use Hardhat's ethers

const PRICE_FEEDER_CONTRACT = "0xd093E975B571C752b58406BEBB5b83f9b7859D9d";

async function main() {
    const [deployer] = await ethers.getSigners();
    const contract = await ethers.getContractAt("UmbrellaPriceFetcher", PRICE_FEEDER_CONTRACT, deployer);

    const keys = [
        ethers.encodeBytes32String("5IRE/USD"),  // Updated for ethers v6
        ethers.encodeBytes32String("BTC/USD"),
        ethers.encodeBytes32String("ETH/USD"),
    ];

    for (const key of keys) {
        try {
            const [price, timestamp] = await contract.getPrice(key);
            console.log(`${ethers.decodeBytes32String(key)} Price: ${ethers.formatUnits(price, 8)} USD`);
        } catch (error) {
            console.error(`Error fetching ${ethers.decodeBytes32String(key)} price:`, error);
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
