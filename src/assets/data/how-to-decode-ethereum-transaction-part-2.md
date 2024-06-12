
<alert type="info">
Welcome back to the series on decoding Ethereum transactions! In the first part, we explored how to use `ethers.js` to create a smart contract interface and decode transaction events by retrieving transaction receipts. If you missed the first part, you can check it out <a href="https://danielbui12.github.io/danielbui12/blog/how-to-decode-ethereum-transaction-part-1">here</a>.
</alert>

In this second part, we will dive deeper into interacting with smart contracts. We will create a smart contract instance and use event filters to query events efficiently. This approach is useful for monitoring specific events without scanning through all transactions.

### What We Are Going to Do
In this tutorial, we will:
1. Set up an event filter to listen for specific events emitted by the smart contract.
2. Query past events using the event filter.

By the end of this tutorial, you'll have a solid understanding of how to use event filters with `ethers.js` to streamline your Ethereum development workflow.

👉👉 OK, LET'S KICK THIS THING OFF

#### Step 1: Setting Up Your Project
Ensure you have `ethers.js` installed in your project. If not, you can install it using npm or yarn:

```bash
$ npm install ethers

or

$ yarn add ethers
```

#### Step 2: Creating a Smart Contract Instance
To interact with a smart contract, you need its ABI (Application Binary Interface) and address. For this example, we'll use a sample ERC-20 contract which is USDT on Ethereum.

```javascript
const { ethers } = require('ethers');

// Connect to an Ethereum node
// Access https://chainlist.org/ for more!
const provider = new ethers.providers.JsonRpcProvider(
    'https://mainnet.infura.io/v3/b8e2e5d61a5440a7aaf9fc1f533c05b4',
);

// Because in this tutorial, we are filtering for `Transfer` events only.
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
]
;
// checksum address
const contractAddress = ethers.utils.getAddress('0xdac17f958d2ee523a2206206994597c13d831ec7');

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractABI, provider);
```

#### Step 3: Setting Up an Event Filter
Now, let's set up an event filter. For instance, we'll filter for `Transfer` events in an ERC-20 contract.

```javascript
const filter = {
  address: contractAddress,
  topics: [contract.interface.getEventTopic('Transfer')],
};
```

#### Step 4: Querying Past Events
To query past events, use the `queryFilter` method on the contract instance. This method takes the filter and an optional range of blocks.

```javascript
async function getPastEvents() {
  const toBlock = await provider.getBlockNumber();
  const fromBlock = toBlock - 50; // just filter a short range to get the result faster

  // Query past events
  const events = await contract.queryFilter(filter, fromBlock, toBlock);
  console.log(events);

  // Process and log the events
  events.forEach(event => {
    console.log(`Transfer from ${event.args.from} to ${event.args.to} of ${event.args.value.toString()}`);
  });
}

getPastEvents().catch(console.error);
```


- Let's run code and see the result

```shell
[
    {
        blockNumber: 20072670,
        blockHash: '0x07c3b4eaa108c203cf22157d90920965878dc07078b9313d315feaaed483cdf4',
        transactionIndex: 40,
        removed: false,
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        data: '0x000000000000000000000000000000000000000000000000000000016146d7c0',
        topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x00000000000000000000000021a31ee1afc51d94c2efccaa2092ad1028285549',
        '0x0000000000000000000000002be37ca7be99f0512235c7345161b46d4405c8b7'
        ],
        transactionHash: '0x96e1e097b5a3fa608cb624b878935bff6b3bf24197875d2bf9fb427a6c711431',
        logIndex: 155,
        removeListener: [Function (anonymous)],
        getBlock: [Function (anonymous)],
        getTransaction: [Function (anonymous)],
        getTransactionReceipt: [Function (anonymous)],
        event: 'Transfer',
        eventSignature: 'Transfer(address,address,uint256)',
        decode: [Function (anonymous)],
        args: [
        '0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549',
        '0x2be37ca7BE99f0512235C7345161b46d4405c8b7',
        [BigNumber],
        from: '0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549',
        to: '0x2be37ca7BE99f0512235C7345161b46d4405c8b7',
        value: [BigNumber]
        ]
    },
]
....

Transfer from 0xECa33dc9E896072d4EdC4A02183910376D4B5E76 to 0x4Ab7FBa3F9dda41375d80e7bE589A0422F06b1D4 of 1867630000
Transfer from 0xECa33dc9E896072d4EdC4A02183910376D4B5E76 to 0xe5779D3D47F563a5924A9B41BF33560EACc736C2 of 1140620000
Transfer from 0xECa33dc9E896072d4EdC4A02183910376D4B5E76 to 0x771A8DEdBf5758CB14e55Be50E1e5E37E9242A00 of 11326250000
....
```

- For more detail, you can direct to <a href="https://docs.ethers.org/v5/concepts/events/">this document</a> 

### Step-by-Step Explanation

1. **Connecting to an Ethereum Node**: We first create a provider to connect to an Ethereum node. Replace `'YOUR_RPC_URL'` with the URL of your Ethereum node provider (e.g., Infura, Alchemy).

2. **Creating a Contract Instance**: We create a contract instance by providing the contract's address and ABI. This instance allows us to interact with the smart contract on the blockchain.

3. **Setting Up an Event Filter**: We set up an event filter to capture specific events emitted by the contract. In this case, we're interested in `Transfer` events of an ERC-20 contract.

4. **Querying Past Events**: Using the `queryFilter` method, we fetch past events that match our filter criteria. We specify a block range to limit our query to a specific range of blocks. The retrieved events are then processed and logged to the console.

### 4. Conclusion
In this part of the series, we learned how to create a smart contract instance using `ethers.js` and set up an event filter to query past events. This approach is invaluable for monitoring and reacting to specific events in a decentralized application.

Stay tuned for the part #3, where we will explore real-time event monitoring and handling just by eyes 👨‍💻!

Happy coding!
