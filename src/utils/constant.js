export const BASE_FILE_URL = "https://raw.githubusercontent.com/danielbui12/danielbui12/develop/src/assets/data/";
export const BASE_WEBSITE_URL = "https://danielbui12.github.io/danielbui12/";

export const NETWORKS = ["Ethereum", "Polygon", "Mumbai", "Oasys"]
export const NETWORK_BASE_URI = {
  [NETWORKS[0]]: "https://etherscan.io",
  [NETWORKS[1]]: "https://polygonscan.com",
  [NETWORKS[2]]: "https://mumbai.polygonscan.com",
  [NETWORKS[3]]: "https://explorer.oasys.games"
}

export const EXPERIENCED_CONTRACT = {
  "BackerzIII": [
    {
      contractName: "Factory ERC1155",
      description: "Create many NFT by ERC1155 standard by contract",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0x0317ea478a8E4472c80C9cbc6BB29aED6E91C3F0"
    },
    {
      contractName: "Factory ERC721",
      description: "Create many NFT by ERC721 standard by contract",
      type: "Testnet",
      network: NETWORKS[2],
      address: "0xe6b735f3dCE3181a9749F40354dC44668a89701d"
    },
    {
      contractName: "RewardInternalDistribution",
      description: "Reward distribution for Project Owner deposit ERC721/ERC1155 rewards created by Factory ERC1155 & Factory 721. User claim them by lazy mint.",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0x5940B6b891362Cc0626C867490a0f16D549Cfa75"
    },
    {
      contractName: "RewardStorage",
      description: "Store reward for whole system.",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0xc0B18B7409781C68005C0f42d42d7100Aa48c488"
    },
    {
      contractName: "RewardExternalDistribution",
      description: "Reward distribution for Project Owner deposit ERC721/ERC1155 rewards created by any contract. User claim them by RewardExternalDistribution.",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0x530D5E28400527b2945af585A710Ff8Bd4a86f63"
    }
  ],
  "MetaX": [
    {
      contractName: "MetaXPayment",
      description: "MetaXPayment handles buy NFT from Opensea through Seaport smart contract.",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0x90135839c7f8161DD13638Cc2aE4DDf01b3454fB"
    }
  ],
  "DAO ecosystem": [
    {
      contractName: "DAO ecosystem",
      type: "Testnet",
      repo: "https://github.com/danielbui12/DAO_ecosystem_smart_contract",
      description: "DAO ecosystem includes many features: Token/NFT Lottery, NFT Mining, Marketplace, NFT Swapping, NFT Auction, Private/Public sale, Staking, ..."
    }
  ]
}

export const EXPERTISE = [
  {
    title: "Founder of MindForgeX",
    time: "2023 - Present",
    outline: [
      "<a href='https://twitter.com/Solana_zh/status/1724340299873271952'>We snagged the 𝟑𝐫𝐝 𝐏𝐑𝐈𝐙𝐄 in the Solana Hyperdrive for the APAC region, recognized by DoraHacks!",
      "<a href='https://twitter.com/SuperteamVN/status/1725154915452907545/photo/2'>Hornorable mention at Solana HyperDrive global hackathon.</a>",
      "<a href='https://twitter.com/RelipaSoftware/status/1706133279152431375'>Achieve top 2 of Solana Consumer Hack 08 by Solana Super Team Vietnam</a>.",
      "<a href='https://twitter.com/MindForgeX'>MindForgeX on Twitter</a>."
    ],
  },
  {
    title: "Blockchain Developer at RELIPA CO., LTD",
    time: "2022 - Present",
    outline: [
      "Handle multiple tasks well: participate in 4-5 projects at one time.",
      "Participating in blockchain development: DeFi, dApp, ecosystem, blockchain layer - 1, etc.",
      "Actively join external hackathons about blockchain and won several awards: In top 10 at Road to Grizzlython hackathon of Web3 Space, Top 2 at Hackathon 08 of Solana SuperTeam Vietnam."
    ]
  },
  {
    time: "2020 - 2023",
    title: "Software Engineer at TORITI LTD",
    outline: [
      "R&D confused business features and new technologies.",
      "Ensuring progress, quality of work by reviewing code, communicating with members in the team.",
      "Developing & Operating system which got over 10,000 users every month.",
      "Team leadership: Training and support in order to build a efficient team in work."
    ]
  }
]