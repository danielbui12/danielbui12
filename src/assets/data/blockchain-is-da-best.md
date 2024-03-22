1 byte = 2 characters length

Ethereum Request for Comment (ERC)

Ethereum Improvement Proposal (EIP)

# Proof of Work (PoW)

- In blockchain system, it works individually by a node ⇒ There is important to make it worked in a rule by linking every nodes to synchronize them. Hence PoW was created.
- PoW is the primary consensus mechanism. Miner acts as a node, it is a super computer that participates in validate transactions then submit them to blockchain network. After that, blockchain system rewards native token to Miner who submit  the NONCE earlies.
- In PoW, miner can validate transactions by forecasting the NONCE and put it in to hash function along with previous block hash to calculate the new block hash. If the new block hash is smaller than the target ⇒ It’s completely verified.

![PoW Block](https://www.asynclabs.co/wp-content/uploads/2018/07/proof-of-work-right-result-2.png)

- PoW has a potential risk: miner which can occupy over 51% above power of all, it can control the whole blockchain system.

# Proof of Stake (PoS)

![PoS](https://file.publish.vn/coin98/2021-07/staking-trong-proof-of-stake-1627407867548.png)

# Proof of History (PoH)

- Overview: Consensus mechanism sẽ liên tục snapshot dữ liệu block/transaction sau đó dựa vào timestamp của transaction/block cùng với các image đã được snapshot sắp xếp lại dữ liệu theo đúng trình tự bằng thuật toán recursive verifiable delay function
- Mỗi node sẽ có cryptographic clock giúp mạng để xác thực giao dịch on time và sắp xếp event mà ko phải đợi các node khác thực hiện xong transaction. Trong node sử dụng thuật toán mã hoá SHA-256 để mã hoá dữ liệu transaction, và mỗi transaction sẽ có 1 timestamp function riêng. Nhờ đó mà consensus mechanism có thể xác định được transaction nào đến trước. 

![Proof of History](https://qph.cf2.quoracdn.net/main-qimg-69d5b990aa1e5c9031a81be87300a8f0-lq)

# Fork


> 💡 Là quá trình thay đổi giao thức hoặc bộ quy tắc cơ bản của blockchain. Fork xảy ra tại một điểm nơi phần mềm được sao chép và sửa đổi. Khi điều này xảy ra, blockchain sẽ tách ra và tạo ra một blockchain mới, nhưng vẫn chia sẻ lịch sử từ blockchain ban đầu. Tuy nhiên, blockchain mới sẽ hoạt động theo quy tắc khác.
>
> Hiện tượng này gọi là Re-organization.

## Hard Fork

Dẫn đến sự phân tách chuỗi vĩnh viễn, vì phiên bản cũ không còn tương thích với phiên bản mới

## Soft Fork

https://coin68.com/fork-soft-fork-va-hard-fork-la-gi/

# Ethereum Virtual Machine (EVM)

- Acting as an intermediary in implementation a smart contract
- 1 node is equivalent to 1 EVM

⇒ EVM allows each DApp to access and operate by each different way. It helps DApp easy to integrate and scale  

# Impermanent loss

- For example: 1 user sends a couple of token to the **Liquidity pool** and he becomes a **Liquidity provider**.
- Liquidity pool allows other users to swap token, get a loan ⇒ The profit comes from that will be shared to Liquidity provider.
- However, Liquidity provider may have to get.

ex: user spent 100 **token A**, 0.05 **token B**, A = 1$, B = 2000$

At a specific time, token A price may higher than token B price, and vice versa.

If user withdraws, he’ll get 50 token A and 0.08 token B, A = 1.5$, B = 2000$

⇒ Farming: 50 * 1.5 + 0.08 * 2000 = 75 + 160 = 235

⇒ Hold: 100 * 1.5 + 100 * 0.05 * 2000 = 150 + 100 = 250 

⇒ **Impermanent loss:** meaning holding token can get more money than farming 

# Optimistic

> 💡 Optimistic Rollup là một giải pháp Layer 2 scaling, giải quyết vấn đề về chi phí và tốc độ giao dịch chậm trên blockchain bằng cách tạo ra một sidechain (còn gọi là L2 chain) để xử lý các giao dịch nhanh hơn và với chi phí thấp hơn. 
> 
> Hoạt động bằng cách  xác thực ***bằng chứng ngược lại
Optimistic Rollup sử dụng cơ chế kiểm tra chéo, đảm bảo rằng tất cả các giao dịch đều được xác thực đúng mức.

## Cơ chế hoạt động

1. Người dùng tạo các giao dịch trên sidechain
2. Node xử lý các giao dịch: Các node trên sidechain nhận và xử lý các giao dịch này, tạo ra một bản sao của sidechain với các giao dịch mới nhất.
3. Tạo Merkle Root hash: Sau khi các giao dịch được xử lý, sidechain sẽ tạo ra một Merkle Root hash của các giao dịch này. Merkle Root hash này sẽ được gửi lại cho mainchain.
4. Đưa Merkle Root hash vào mainchain: Một aggregator trên mainchain sẽ lấy Merkle Root hash và đưa nó vào mainchain như một giao dịch Rollup.
5. Xác minh các giao dịch Rollup
6. Trường hợp bằng chứng ngược lại

## **Hạn chế**

- Độ trễ khi có bằng chứng ngược lại
- Độ tin cậy của validator
- Khả năng xử lý các giao dịch phức tạp kém

# zkSync


> 💡 **zkSync là một giải pháp layer-2 thuộc nhóm ZK-Rollups sử dụng kỹ thuật bằng chứng mật mã được gọi là Zero-Knowledge Proofs (ZKPs) để ngay lập tức chứng minh tính hợp lệ của các giao dịch**

## Lợi ích

- ZK-Rollups giảm lượng dữ liệu cần thiết để xác thực khối, cho phép hoàn thành nhanh hơn và với chi phí thấp hơn (vì nó đã quan sát dữ liệu theo các block).
- Không có sự chậm trễ trong việc chuyển tiền từ Layer 2 sang Layer 1 bằng ZK-Rollups. Điều này là do hợp đồng ZK-rollup trước đây đã xác minh tính hợp pháp của tiền thông qua bằng chứng hợp lệ.

## Cách hoạt động của ZK-rollups

1. Thành phần trên chuỗi (on-chain): ZK-rollups sử dụng một thành phần trên chuỗi để duy trì quỹ và theo dõi số dư tài khoản của người dùng
2. Operator nodes: gom các giao dịch từ người dùng, sau đó tổng hợp những giao dịch này thành các batches và thực hiện chúng off-chain tại zkEVM 
3. Chứng minh tính hợp lệ (validity proof): Sau khi thực hiện giao dịch ngoại chuỗi, các nhà điều hành tạo ra chứng minh mật mã gọi là “chứng minh tính hợp lệ” bằng thuật toán zk proofs
4. Gửi thông tin lên chuỗi: Các chứng minh tính hợp lệ cùng với trạng thái tài khoản mới nhất được gửi đến một hợp đồng thông minh trên chuỗi. Hợp đồng kiểm tra tính hợp lệ của chứng minh và xác minh rằng các giao dịch đã được thực hiện đúng cách ngoại chuỗi.
5. Cập nhật trạng thái: Nếu chứng minh được xác minh là hợp lệ, hợp đồng thông minh cập nhật trạng thái của mình để phản ánh sự thay đổi trong ZK-rollup.

## Nhược điểm

- Chi phí tính toán cao
- Khung cơ học phức tạp
- Chi phí triển khai và khó khăn trong triển khai

## zkEVM

EVM executes smart contracts on-chain, which can slow down transaction processing. zkEVM shifts most of the smart contract execution off-chain, significantly speeding up the process

# zkSync vs. Optimistic

|  | zkSync | Optimistic |
| --- | --- | --- |
| Chi phí | - phí giao dịch cao hơn
- chi phí triển khai cao hơn, phức tạp hơn | - chi phí giao dịch thấp hơn
- dễ triển khai |
| Khả năng mở rộng | Kết cấu phức tạp, zkEVM | Tích hợp EVM |
| Độ trễ | - Độ trễ khi xác minh giao dịch nhanh hơn, nhưng không mất nhiều thời gian để hoàn thành giao dịch | - Thấp khi bình thường
- Cao khi bị lỗi |
| Tính riêng tư | Cao (Vì layer-1 không cần xác minh lại transaction) | Thấp (Vì layer-1 cần lấy merkle root hash để xác minh ngược lại theo cơ chế xác minh chéo, bằng chứng ngược lại) |

# Bridge Cross chain

## Cơ chế hoạt động

> 💡 An IOU (I Owe You) token is a type of digital asset that is used to represent debt between two parties

- Lock and mint: Khi token được gửi từ Chain A sang chain B. User lock token in smart contract of chain A, then wrapped token được mint trên chain B dưới dạng IOU và ngược lại.
- Burn and mint: User burn token of chain A, then native token giống nhau được mint trên chain B.
- Lock and unlock: User lock token trên chain A, sau đó mở khóa native token giống nhau từ pool thanh khoản trên chain B. Những loại cross-chain bridge này thường thu hút thanh khoản ở cả hai bên cầu thông qua các biện pháp khuyến khích kinh tế như chia sẻ doanh thu.

## **Phân loại cross-chain**

### Centralized Bridge

- Centralized bridge có cơ quan điều khiển tập trung. Loại bridge này cho phép người dùng nhận tiền từ bất kỳ blockchain nào theo tỷ lệ 1:1.
- Bắt buộc phải KYC, và thu thập thông tin người dùng

### **Decentralized Bridge**

- Tự động giao dịch.
- Decentralized bridge không yêu cầu người dùng phải trải qua thủ tục KYC, và không thu thập dữ liệu người dùng

### Một số dự án nổi bật

- Multichain
- Layer-zero
- Axela
- Wormhole
  - Standard Relayer
![Standard Relayer](https://docs.wormhole.com/~gitbook/image?url=https:%2F%2F2048606572-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MkD9YTtNUKJxtD9pDF-%252Fuploads%252Fgit-blob-8d2af51634cf1439ad20c5ea7599ff0daa771856%252Fauto-relayer.png%3Falt=media&width=768&dpr=4&quality=100&sign=9ec5273e8086e45951acfa689f1807e4557df9c1a098b3fe4f367544ae93a4d0)

  - Specialized Relayer
![Specialized Relayer](https://docs.wormhole.com/~gitbook/image?url=https:%2F%2F2048606572-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MkD9YTtNUKJxtD9pDF-%252Fuploads%252Fgit-blob-2015dac4587e484be7e74efe25c34c4b75f568f2%252Fspecialized-relayer.png%3Falt=media&width=768&dpr=4&quality=100&sign=dc445b670e288e1a7823f096a40fc2d069babd8632bf089aa5937985adb27177)

# Uniswap v2 vs. v3

| | V2 | V3 |
| --- | --- | --- |
| Multiple Fee Tiers |  |  |
| | Uniform Liquidity | Concentrated Liquidity |
| | Uniswap V2 uses a constant product formula, which means liquidity providers provide equal value of both tokens in a liquidity pool. This leads to uniform liquidity across the price range, but it can be inefficient for assets with varying price ranges | Uniswap V3 introduces the concept of concentrated liquidity. Liquidity providers in V3 can specify price ranges where they want to provide liquidity, allowing for more efficient capital utilization. This enables liquidity providers to focus their assets within specific price ranges where they anticipate more trading activity |
|  | Uniswap V2 had a fixed fee of 0.30% for all trades | Uniswap V3 allows liquidity providers to choose from multiple fee tiers (ranging from 0.05% to 1%) when providing liquidity to a pool. This flexibility allows LPs to optimize their earnings based on their risk tolerance and market conditions |
| Formula |  |  |
|  | [Uniswap V2 formular](#uniswap-v2-formular) | https://atise.medium.com/uniswap-v3-liquidity-formula-explained-de8bd42afc3c |
| Management of Impermanent Loss |  |  |
|  | Impermanent loss is a risk faced by liquidity providers when the price of assets in a pool changes. | Uniswap V3's concentrated liquidity model can allow LPs to better manage and mitigate impermanent loss by focusing on specific price ranges |


### Uniswap V2 formular

Constant product formula: token_a_pool_size * token_b_pool_size = constant_product Starting pool for both examples

Pool info:
USDT = 1,000,000
ETH = 1,000
Constant Product = 1,000,000,000
Market Price = 1,000 ETH/USDC

Context:
Swap 10,000 USDT for ETH

After swap:
USDC = 1,000,000 USDT + 10,000 USDT = 1,010,000 USDT (because we added 10,000 to the pool)
Constant Product = 1,000,000,000 (stays the same)

ETH = 1,000,000,000 / 1,010,000 = 990.09 (constant product / new usdt amount)

ETH recieved = 1,000 ETH - 990,09 ETH = 9.9 ETH (old eth amount - new eth amount)

Price paid per ETH = Difference in USDT / Difference in ETH ≈ 10,000 / 9.9 ≈ 1,010.101 USDT

Price impact = (1,010.101 - 1,000) / 1000 * 100 = 1.0101% 


# DAO

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/733c73a7-d465-4539-9ccd-d91ff07dbbb4/Untitled.png)

## Token-based DAO

- This kind of DAO depends on 1 specific token
- Users who have owned that token is holders, holders can contribute to vote the proposal in the DAO
- The much token user has, the higher role user has
- Projects used this kind of DAO: UNISWAP, AAVE, …

## Share-based DAO

- This kind of DAO is different from Token-based DAO, this kind of DAO is permitted a lot more
- Because of that,  not anyone can own the token used in this kind of DAO
- Anyone who want to contribute to this DAO have to send a proposal “want to join”, and surely they must send another token or meet several needs to be allowed to join.
- As it name, holders can vote by sharing, they can quit anytime but suitable for ratio in the treasury
- Projects used this kind of DAO: MOLOCH DAO, THE LAO, …

# WASM

- CosmosWASM: based on rust
- Pokadot: / Astar Ask!: giống typescript
- MINA: o1js
- NEAR: near sdk js

# Upgradeable smart contract

- [`Proxy`](https://docs.openzeppelin.com/contracts/4.x/api/proxy#Proxy): Abstract contract implementing the core delegation functionality.
- [`EIP1967`](https://eips.ethereum.org/EIPS/eip-1967):  Store the storage slot address
    - [`ERC1967Upgrade`](https://docs.openzeppelin.com/contracts/4.x/api/proxy#ERC1967Upgrade): Internal functions to get and set the storage slots defined in EIP1967.
    - [`ERC1967Proxy`](https://docs.openzeppelin.com/contracts/4.x/api/proxy#ERC1967Proxy): A proxy using EIP1967 storage slots. Not upgradeable by default.

### TransparencyUpgradeableProxy

1. Implementation contract containing the logic
2. A ProxyAdmin to be the admin of the proxy
3. A proxy to the implementation contract, which is the contract that you actually interact with

> 💡 A **delegate call** is similar to a regular call, except that all code is executed in the context of the caller, not of the callee

- The proxy contract bytecode includes the implementation contract bytecode
- The proxy contract save the address of the slot where the data is saved in