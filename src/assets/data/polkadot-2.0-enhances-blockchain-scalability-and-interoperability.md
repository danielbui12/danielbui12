### Table of Contents

- <a href="#Polkadot-Overview">Polkadot Overview</a>
- <a href="#Polkadot-2.0-Definition">Polkadot 2.0 Definition</a>
- <a href="#Asynchronous-Backing" style="padding-left: 12px;">Asynchronous-Backing</a>
- <a href="#Agile-Coretime" style="padding-left: 12px;">Agile Coretime</a>
- <a href="#Elastic-Scaling" style="padding-left: 12px;">Elastic Scaling</a>
- <a href="#Opportunities-and-challenges">Opportunities and Challenges</a>
- <a href="#References">References</a>

<alert type="info">
At 8th May '24, 3:33 pm, Alice und Bob had submitted a <a href="https://polkadot.polkassembly.io/referenda/747" target="_blank">proposal</a> about Polkadot 2.0 definition. The proposal was accepted by the community.

In this blog, we will have an overview of Polkadot 2.0. 
What is it?
What problems does it solve?
What are the key features?
...


💁 Ok, let's get started.
</alert>

# Polkadot Overview

Polkadot is a foundational Layer 0 solution specifically designed to address blockchain interoperability, providing developers with a robust platform for creating applications and blockchains. Its architecture features a primary Relay Chain responsible for the network’s security, consensus, and interoperability, alongside numerous parallelized chains that run parallel to the Relay Chain (aka. [parachains](#ref-Definition-of-a-Parachain)).

Parachains are built using the [Substrate](#ref-Substrate-and-Polkadot) framework, which provides the foundational building blocks for creating customized blockchains without need for developing consensus algorithms. Parachains can communicate with each other and the central Relay Chain using Cross-Consensus Messaging (XCM), allowing them to exchange information and transactions seamlessly. This architecture not only leverages the shared security model of Polkadot but also enables diverse applications to interoperate within a unified ecosystem.


![parachain-overview](https://wiki.polkadot.network/assets/images/one-parachain-f8e0673144a718bd67834cdd69894ca2.png)


# Polkadot 2.0 Definition

Polkadot 2.0 represents a significant upgrade designed to enhance scalability and execution speed without compromising network security. This new version introduces several improved mechanisms, and changes in network resource allocation. These innovations aim to optimize network capacity based on computational demand, ensuring Polkadot remains at the forefront of blockchain technology. As the digital landscape evolves, Polkadot 2.0 stands ready to meet the growing needs of decentralized applications with enhanced efficiency and resilience.

![polkadot-2.0](https://github.com/w3f/polkadot-wiki/assets/79790753/ee4e6911-eda7-44ae-a9fd-fd902bf520f3)

Upgrade status:
- Asynchronous Backing: Released ✅
- Agile Coretime: Live on Kusama, next on Polkadot 🛠️
- Elastic Scaling: Coming soon 🔄

## Asynchronous Backing

[Asynchronous Backing](#ref-Asynchronous-Backing) enhances the throughput and efficiency of Polkadot parachains by allowing collators to build blocks on older Relay Chain blocks, creating pipelines of multiple pending blocks. This separation improves performance by up to 10x when combined with Proof-of-Validity (PoV) reclaim, enabling parachains to produce blocks every six seconds instead of twelve seconds, with blocks four times larger.

Benefits:
- Higher Transaction Volume: Supports high-throughput parachains like gaming platforms ⏫.
- Consensus Optimization: Enhances efficiency without compromising security ⛓️.
- Greater Flexibility: Parachains can process multiple transactions and operations simultaneously 🔀.

![Asynchronous Backing](https://github.com/w3f/polkadot-wiki/assets/79790753/cf33f13c-01c2-4742-8fa9-66c83a187037)

In asynchronous backing, parablocks (P) are included every 6 seconds, and backing (B) and inclusion (I) can happen within the same relay chain block (R).

## AGILE CORETIME

[Agile Coretime](#ref-Agile-Coretime) introduces flexible and dynamic resource management by allocating coretime on a lease basis, eliminating the need for long-term slot auctions. Coretime can be purchased on-demand or in bulk up to 28 days in advance, with secondary markets allowing for resale of unused coretime.

Benefits:
- Reduced Entry Barriers: Easier for new projects to onboard onto Polkadot 🔋.
- Efficient Resource Utilization: Maximizes blockspace usage, reducing waste 💪.
- Scalable Flexibility: Supports both early-stage projects and large enterprises 🔀.

![Agile Coretime](https://github.com/w3f/polkadot-wiki/assets/79790753/4b52976d-e9f1-44b3-b45e-9e1218179d32)

In Polkadot 2.0, the coretime marketplace enables developers to efficiently purchase block time, scaling their operations to match computational and consensus requirements. Revenue from these transactions functions akin to rental income.

With Polkadot 2.0's enhanced scalability, decentralized applications (DApps) can dynamically adjust resource usage according to demand. This facilitates seamless integration of assets and functionalities across multiple blockchains, thereby broadening market access and liquidity.

To implement a deflationary strategy, Polkadot has proposed burning the revenue generated from coretime sales. This initiative aims to enhance the attractiveness of DOT tokens for long-term holding, aligning with the network's objectives of bolstering security and operational efficiency across its ecosystem.

|  | Coretime Allocation in Polkadot 1.0 | Coretime Allocation in Polkadot 2.0 |
| --- | --- | --- |
| Coretime Allocation Method | Slot rental mechanism | Tradable and accumulatable asset |
| Duration | Fixed term (6 to 24 months) | Dependent on block creation time |
| Parachain Access | Granted for a specific slot | Can be bought or sold as block creation time |
| Bidding Method | Slot rental through auctions | Bulk purchase and instant buy |
| Mechanism | Coretime is fixed and non-transferable | Coretime becomes a tradable commodity |

Polkadot sets itself apart from other blockchain networks by working with the Securities and Exchange Commission (SEC) to classify its products as software, not securities. By doing so, Polkadot seeks to comply with securities laws and position its native token, DOT, as a technology-focused asset rather than a financial instrument.

## ELASTIC SCALING

[Elastic Scaling](#ref-Elastic-Scaling) allows parachains to consume more than one core if they require additional resources, supporting scalability by enabling parachains to increase resource usage to handle growing demands.

Benefits:
- Scalability: Parachains can expand as needed without compromising performance ⚙️. 
- Enhanced Efficiency: Enables processing of surges in activity without delays 💪.
- Improved User Experience: Ensures smooth application operation and responsiveness even during peak usage 👨‍💻.

# Opportunities and Challenges

Polkadot stands as a pivotal and innovative presence in the blockchain sphere, striving to redefine the interoperability and scalability of diverse networks. With its multichain structure, Polkadot enhances scalability, interoperability, and flexibility, which are key to the evolving Web3 framework.

The transition to Polkadot 2.0 signifies the platform's proactive evolution, addressing early challenges with more adaptable and efficient solutions. This upgrade introduces a coretime marketplace, allowing developers to purchase block time dynamically and efficiently scale their operations to match computational and consensus needs. Revenue from these sales functions as rental income, and to implement a deflationary strategy, Polkadot proposes burning this revenue, enhancing DOT's attractiveness for long-term holding.

Projects within the ecosystem need to use DOT tokens to purchase coretime, driving up demand for DOT. Additionally, entities with excess coretime can sell it, potentially increasing the secondary market value of DOT. The enhanced utility of Polkadot 2.0 also facilitates seamless integration of assets and functionalities across multiple blockchains, broadening market access and liquidity.

Revenue from coretime sales will be transferred to the Polkadot Treasury, where DOT token holders will decide fund allocation through OpenGov. Tokens not allocated to projects seeking funding will be periodically burned, creating deflationary pressure on DOT and balancing its total circulating supply. This mechanism aims to boost DOT's value and align with the network's objectives of improving security and efficiency across its ecosystem.

As Polkadot continues to develop, its success in leveraging its unique capabilities and overcoming its challenges will play a crucial role in defining its position within the broader blockchain ecosystem. Polkadot's progress reflects the overall growth and maturation of blockchain technology, demonstrating the potential to create a decentralized and interoperable future.

> Unveiling Polkadot 3.0 - Join-Accumulate Machine (JAM) allows for parallel execution and introduces a novel block production algorithm, SAFROLE, emphasizing simplicity and security. See more [JAM gray paper](#ref-JAM-Gray-Paper).

# References

- <a href="https://polkadot.polkassembly.io/referenda/747" target="_blank" id="ref-Polkadot-2.0-Definition">#747 Polkadot 2.0 Definition</a>
- <a href="https://wiki.polkadot.network/docs/learn-parachains" target="_blank" id="ref-Definition-of-a-Parachain">Definition of a Parachain</a>
- <a href="https://substrate.io/vision/substrate-and-polkadot/" target="_blank" id="ref-Substrate-and-Polkadot">Substrate and Polkadot</a>
- <a href="https://wiki.polkadot.network/docs/learn-async-backing" target="_blank" id="ref-Asynchronous-Backing">Asynchronous Backing</a>
- <a href="https://wiki.polkadot.network/docs/learn-agile-coretime" target="_blank" id="ref-Agile-Coretime">Agile Coretime</a></a>
- <a href="https://polkadot.network/blog/elastic-scaling-streamling-growth-on-polkadot" target="_blank" id="ref-Elastic-Scaling">Elastic Scaling</a></a>
- <a href="https://graypaper.com/" target="_blank" id="ref-JAM-Gray-Paper">JAM Gray Paper</a></a>
