# Deep Dive Into SUI Blockchain. What is SUI?


> ❕❕❕ Why is Sui network TPS so high?


> ❕❕❕ Damnnn, developing on Sui blockchain is so smooth and fast!



### A Brief Overview of SUI Network

The Sui network is a Layer-1 blockchain network, launched its mainnet on 03/05/2023 and has its own native token called $SUI. The main purpose of Sui is to build a blockchain platform with low latency, low cost - very practical and convenient for GameFi projects, dApps, etc.

For example, if I have a dApp project preparing to airdrop to millions of users. For conventional blockchain networks, if millions of transactions like this are executed, network congestion and high transaction fees are inevitable.

That's also the biggest obstacle of Blockchain: "Slow transaction processing speed, high transaction fees" (Currently, it's not as high as before due to patches and continuous updates to address this issue, but it's still a problem 😅).

However, everything on the Sui network is very fast and efficient. Let's look at comparison data around 2023 - 02/2024, this information is gathered from the Internet:

TPS (transaction per second): the number of transactions processed in 1 second
- [Ethereum](https://tangem.com/en/blog/post/crypto-in-2024/):
  + TPS: 100,000
  + Gas Fee: Average 38.79 Gwei
- [BSC](https://www.binance.com/en/feed/post/451681):
  + TPS: 100
  + Gas Fee: Average 6.051 Gwei
- [Avalanche](https://www.gadgets360.com/.../avalanche-price-in-india...):
  + TPS: 4,500
  + Gas Fee: 5,110.30 nAVAX
- [Sui](https://suipiens.com/blog/an-update-of-sui-performance/):
  + TPS: **297,000** => About 3 times faster than Ethereum.
  + Gas Fee: According to Sui's official documentation "Sui network has a low gas fee algorithm, and it can be predicted in advance". (https://docs.sui.io/concepts/tokenomics/gas-pricing / https://docs.sui.io/concepts/tokenomics/gas-in-sui)
- And so on ...

=> As everyone can see, Sui surpasses both in transaction processing speed and transaction costs. Sui's owner has also declared:
The Sui network with 100 validators worldwide achieves the highest throughput ranging from **10,871** TPS to **297,000** TPS across different workloads.
The time for Sui to complete a transaction is about ~480 milliseconds (0.48 seconds)
Note: Before Sui, there was Solana with 710,000 TPS. However, since this is about Sui's spotlight, Solana will not be mentioned in this post 😀.

### HOW DOES SUI WORK?
In overview, the consensus mechanism of the Sui network is Delegated Proof of Stake (DPoS) combined with Mempool & Consensus Engines called Narwhal and Bullshark. This means it divides the transaction processing process into 2 parts:

- Narwhal: Ensures the integrity of data sent to the system, orders the transaction in mempool _(aka. global transaction queue)_.

- Bullshark: Validates the specific order of the data.

In this post, I won't delve too deeply into the technology, if anyone wants to learn more, they can visit 👉 [Sui consensus](https://docs.sui.io/concepts/sui-architecture/consensus)

The biggest difference of the Sui network is **Programmable Transaction Blocks (PTB)**. This means we can customize, configure, and adjust transactions within the block by horizontally scaling the scope combined with allowing parallel transaction processing to help projects use it easily and suitably for maintaining costs and low transaction latency.

The size of PTB is proportional to TPS, meaning the more customizable transactions there are, the faster the transaction throughput will be.

For the programming language for smart contracts, the Sui network uses Move language, which is developed based on Rust, providing fast transaction speeds, instant processing, and scalability.

### BONUS: What is Horizontal Scaling?

In practical terms: Let's say I have 100 tasks to complete in a day.

If I choose the option of vertical scaling, meaning I would have to maximize my work efficiency to handle tasks faster, but the effectiveness may not necessarily be guaranteed.

If I choose the option of horizontal scaling, meaning I would enlist more colleagues to handle tasks together. Not only is there no limit on efficiency, but the effectiveness also improves.

=> Therefore, it can be seen that Sui network's choice of horizontal scaling is indeed logical.

### SUMMARY:
Key Highlights:
- Outstanding transaction processing speed: 297,000 TPS, 3 times faster than Ethereum.
- Low transaction fees with predictability.
- High scalability due to the use of horizontal scaling mechanism and Programmable Transaction Blocks (PTB).
Potential:
- Ideal platform for GameFi projects, dApps requiring high speed and low costs.
- Addresses network congestion and high fees issues of traditional blockchain networks.
Read more: Part 1: Exciting Changes in Sui at ➡️ https://danielbui12.github.io/danielbui12/blog/sui-network-part-1