import { ethers } from "hardhat";
import { fetchVerifyArgs } from "./utils";

// PullConsumer contract address on 5IRE Mainnet 
const PullConsumerAddress = "0xB1e44Fb6DDc1DA35300DA3b66be4235F1532d6D7";

async function main() {

  // Fetch the update data from finalized-data-snap
  // `5IRE/USD` is the asset we want to verify
  const asset = "5IRE/USD";
  const verifyArgs = await fetchVerifyArgs(asset);
  console.log(verifyArgs);
  // Bind PullConsumer contract on the network
  const consumer = await ethers.getContractAt(
    "PullConsumer",
    PullConsumerAddress
  );
  // Send verify transaction
  let tx = await consumer.verifyPrice(
    verifyArgs.merkleRoot,
    verifyArgs.merkleProof,
    verifyArgs.signatures,
    verifyArgs.dataKey,
    verifyArgs.price,
    verifyArgs.timestamp,
  );
  await tx.wait();
  console.log("sent tx:", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
