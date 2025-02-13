# Fetch 5ire's Price from 5ireChain 


## Entangle Oracle

<details>
<summary>Fetch 5ire/USD Price from Entangle Oracle</summary>

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
npx hardhat run scripts/entangle/fetchAndVerify.ts --network fire
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


</details>

<br/>
<br/>

<details>
<summary>Supported Pairs </summary>

### 1. 5ire/USD


</details>



## Orochi Oracle


<details>
<summary>Fetch 5ire/USD, 5ire/USDT Price from Orochi Oracle</summary>
This script fetches the `5IRE/USD` and `5IRE/USDT` price using the FetchPrice smart contract on the 5ireChain.

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
Compile and deploy the contract:

```bash
npx hardhat compile
```

Deploy the contract to the `5ireChain` network:

```bash
npx hardhat run scripts/orochi/deploy.ts --network fire
```

Copy the deployed contract address and update `orochifetch.ts` with it. Then run:

```bash
npx hardhat run scripts/orochi/orochifetch.ts --network fire
```



## Script Overview

The script performs the following operations:

1. Fetches `5IRE/USD` and `5IRE/USDT` prices from `Orochi Oracle`
2. Interacts with the FetchPrice contract at `0x3E36123bAE1d9EB392C32849324D093a45CEDd7F`
3. Retrieves and displays the latest price

## Expected Output

When successful, you should see output similar to:

```
📡 Fetching 5IRE/USDT price from contract...
💰 5IRE/USDT Price: 0.003066 USDT
💰 5IRE/USD Price: 0.003066352589999999 USD
```

## References
+ https://docs.orochi.network/orochi-network/orocle-v2.html



</details>
<br/>
<br/>

<details>
<summary>Supported Pairs </summary>

### 1. 5IRE/USD

### 2. 5IRE/USDT


</details>