# 5ire Price Verification Script

This script fetches and verifies the `5IRE/USD` price using the PullConsumer smart contract on the 5ireChain.


## Prerequisites

- Node.js (v20 or higher)
- Yarn
- A `5ireChain Mainnet` Configuration
- Private key with sufficient `5IRE coins` for gas fees

## Setup

1. Install dependencies:
```bash
yarn install
```

2. Configure environment variables by creating a `.env` file:

```env
FIRE_URL=https://rpc.5ire.network
FIRE_DEPLOYER=your_private_key_here
```

## Running the Script
Execute the script using Hardhat:


```bash
npx hardhat run scripts/fetchAndVerify.ts --network fire
```



## Script Overview

The script performs the following operations:

1. Fetches verification data for 5IRE/USD price from `Entangle Oracle`
2. Interacts with the PullConsumer contract at `0xB1e44Fb6DDc1DA35300DA3b66be4235F1532d6D7`
3. Verifies the price using `merkle proofs` and `signatures`
4. Outputs the transaction hash upon successful verification

## Expected Output

When successful, you should see output similar to:

```
sent tx: 0x62364a7c80168b8a5a4e8e0758b7a034e96e2e57ae543a8c7907a27039e79a56
```


## References
+ https://docs.entangle.fi/universal-data-feeds-guides/how-to-integrate/evm-smart-contracts/fetch-data-via-pull-model
