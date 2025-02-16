import { ethers } from "hardhat"; // Use Hardhat's ethers

const UMBRELLA_ADAPTER_CONTRACT = "0x0ec3358913c64fb7d988fee67eB397c14a9725c3";

async function main() {
    const [deployer] = await ethers.getSigners();
    const contract = await ethers.getContractAt("UmbrellaAdapter", UMBRELLA_ADAPTER_CONTRACT, deployer);

    // Feed address on Testnet
    const feedAddress = "0x1B9131518EadDFDCCc1876616e3Bf9c534b4e527";
    const feedKey = ethers.toUtf8Bytes("5IRE/USD");

    const [price, timestamp] = await contract.getPrice(feedAddress, feedKey);
    console.log(`Price: ${price} USD`);
    console.log(`Timestamp: ${timestamp}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
