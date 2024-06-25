![xcm is growing up](https://miro.medium.com/v2/resize:fit:1062/format:webp/1*-Lnb1LRu9KU33HlH17b3jg.png)


### Table of Contents

- [What is XCM?](#what-is-xcm?)
    - [Definition](#definition)
    - [XCM Transport Methods](#xcm-transport-methods)
    - [XCM Virtual Machine](#xcm-virtual-machine)
- [Use cases](#use-cases)
- [XCM Upgrades](#xcm-upgrades)
    - [XCM V3](#xcm-v3)
    - [XCM V4 Coming Soon](#xcm-v4-coming-soon)

## What is XCM?

<br />
<br />
### Definition
<br />

XCM (Cross-Chain Messaging) is a crucial component of the Polkadot ecosystem, enabling seamless communication and interoperability between parachains. It's the set of rules messages or the "common language" spoken between different channels.

<alert type="secondary">
⚠️ XCM is just a language, not a protocol that responsible for transporting messages.
</alert>

XCM's A-4 😎: 4 high-level core design principles which it stands to follow

- **Asynchronous**: The sender sends the message without waiting for it to be processed.
- **Absolute**: Guarantees that the message will be delivered and understood correctly.
- **Asymmetric**: There is no direct confirmation that the message has been received.
- **Agnostic**: Works without knowing or depending on the system it is sending to.

<br />
<br />
### XCM Transport Methods
<br />

There are three primary methods for message passing, one of which is under development:

1. XCMP (Cross-Consensus Message Passing)
2. Horizontal Relay-routed Message Passing (HRMP/XCMP-lite)
3. VMP (Vertical Message Passing)

#### XCMP (Cross-Chain Messaging Passing)

<alert type="warning">
⚠️ CAUTION

XCMP is currently under development, and most of the cross-chain messages pass through HRMP channels for the time being.

</alert>
**[XCMP](https://wiki.polkadot.network/docs/learn-xcm-transport#xcmp-design)** allows secure communication between parachains. It comes in two forms: Direct and Relayed:

- **Direct**: Message data is sent directly between parachains, making it highly scalable and O(1) on the Relay-chain side.
- **Relayed**: Message data is routed through the Relay-chain and piggybacks on VMP, resulting in lower scalability. On-demand parachains may experience message delays due to queue growth.

#### VMP (Vertical Messaging Passing)

Vertical Messaging Passing is the communication between the Relay Chain and parachains. It can be divided into two formats:

- UMP (Upward Message Passing): Message from the **parachain** to the **Relay Chain**.
- DMP (Downward Message Passing): Message from the **Relay Chain** to a **parachain**.

![VMP](https://github.com/danielbui12/danielbui12/assets/79790753/99606518-615d-4e6f-9475-e0b0b16e671c)

#### HRMP(Horizontal Relay-routed Message Passing)

Different from VMP, which is communication between a specific parachain with the Relay-chain, HRMP is communication between parachains and require minimal involvement of the relay chain Relay-chain.

![HRMP](https://github.com/danielbui12/danielbui12/assets/79790753/a580260f-b2a0-405b-bb2d-95facd184fcd)


### XCM Virtual Machine

At the heart of XCM is something called the XCVM (Cross-Consensus Virtual Machine). This is like a special computer that only understands the language of XCM. It follows a set of rules (the XCVM specification) to make sure messages are translated correctly.

Here’s how it works:

- Messages: In XCM, messages are like little programs made up of instructions. These instructions tell the XCVM what to do, like transferring assets from one blockchain to another.

- Execution: The XCVM runs these instructions one by one. If everything goes smoothly, it completes the task. If there’s an error, it stops and lets you know something went wrong.

- Customization: The great thing about XCVM is that it’s designed to be customizable3. This means that developers can tweak it to fit the specific needs of their blockchain.

## Use-cases

With XCM, the possibilities for cross-chain functionality are expanded, enabling a range of innovative applications and services:

- Multi-Chain DApps: XCM enables dApps to interact with multiple blockchains for a seamless user experience.
- Token Interoperability: XCM allows tokens to be transferred and traded across different blockchains.
- Cross-Chain Governance: XCM facilitates decentralized governance across multiple blockchains.
- Cross-Chain Data Exchange: XCM enables the transfer of data between different blockchains for decentralized data marketplaces.
- Cross-Chain Identity Management: XCM supports the transfer of identity information between blockchains for decentralized identity systems.
- Interconnected Smart Contracts: XCM allows smart contracts on different blockchains to interact and execute complex cross-chain logic.
- Decentralized Finance (DeFi): XCM enhances DeFi applications by enabling asset and liquidity movement across blockchains.
- Supply Chain Management: XCM can streamline supply chain processes by enabling cross-chain tracking and verification.
- Gaming and NFTs: XCM allows for the transfer and interoperability of in-game assets and NFTs across different gaming platforms and blockchains.
- Cross-Chain Oracles: XCM enables oracles to provide data feeds to multiple blockchains, enhancing the reliability and reach of decentralized applications.
- And more!!

![XCM Use-Cases](https://github.com/danielbui12/danielbui12/assets/79790753/10505085-866a-4350-a2e6-640b67ad36d6)

## XCM Upgrades

From December 2020 to 2022, XCM has been updated and improved multiple times to increase its flexibility, diversity, and efficiency. This shows that Polkadot remains a state-of-the-art technology, with the foundation consistently focused on technological development.

<br />
<br />
### XCM V3
<br />

The XCM V3 has improved the protocol that facilitates he splitting of applications across different sharded protocols, parachains, and more.

- Multichain Decomposition Tools
- Expectations and Branchings
- Asset and NFT Transfer
- Safe Dispatches

The goal of XCM V3 is to decompose the Polkadot Relay Chain into “system chains functionally” — with the primary functions of the Relay Chain to provide security and interoperability.

The key is to create a common good parachain for each function (governance, staking, auctions, assets). This is the competitive advantage of the Polkadot architecture over other ecosystems.

![xcm-v3](https://pbs.twimg.com/media/GQbWnHiaIAAPFjL?format=jpg&name=4096x4096)

<br />
<br />
### XCM V4 Coming Soon
<br />

According to [Gavin Wood, at Polkadot Decoded 2022](https://youtu.be/K2c6xrCoQOU?t=1920), it is noted that XCM V4 is in development and addresses issues such as:

- Dynamic fee discovery
- Checkpoints
- Instant version negotiation
- Smart contracts


## Reference

- [Polkadot Wiki - XCM](https://wiki.polkadot.network/docs/learn-xcm)
- [XCM v3 | Polkadot Deep dive](https://www.youtube.com/watch?v=MMIPNR3SuB4)
- [Gavin Wood, Polkadot founder: XCM v3 | Polkadot Decoded 2022](https://youtu.be/K2c6xrCoQOU?t=1920)
- [XCM v3: Breaking New Ground for Web3 Interoperability](https://polkadot.network/blog/xcm-v3-breaking-new-ground-for-web3-interoperability)
