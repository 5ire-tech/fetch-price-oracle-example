const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const orocleAddress = "0x3E36123bAE1d9EB392C32849324D093a45CEDd7F"; // 5ireChain Testnet Oracle address
    const Fetch5IREUSDT = await hre.ethers.getContractFactory("Fetch5IREUSDT");
    const fetch5IREUSDT = await Fetch5IREUSDT.deploy(orocleAddress);

    await fetch5IREUSDT.waitForDeployment(); 

    console.log("✅ Contract deployed at:", fetch5IREUSDT.target);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

