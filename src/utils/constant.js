export const BASE_FILE_URL = "https://raw.githubusercontent.com/danielbui12/danielbui12/develop/src/assets/data/";
export const BASE_WEBSITE_URL = "https://danielbui12.github.io/danielbui12/";

export const NETWORKS = ["Ethereum", "Polygon", "Mumbai", "Oasys HUB"]
export const NETWORK_BASE_URI = {
  [NETWORKS[0]]: "https://etherscan.io",
  [NETWORKS[1]]: "https://polygonscan.com",
  [NETWORKS[2]]: "https://mumbai.polygonscan.com",
  [NETWORKS[3]]: "https://explorer.oasys.games"
}

export const EXPERIENCED_CONTRACT = {
  "OAS Jumbo": [
    {
      contractName: "Prize",
      description: "Containing logics of drawing, claiming lottery",
      type: "Mainnet",
      network: NETWORKS[3],
      address: "0x8cBDd3B4a9770C0A199eF83B901bEc5CA25a4612"
    },
    {
      contractName: "Raffle",
      description: "Containing logics of buy ticket, staking, re-staking, withdrawing",
      type: "Mainnet",
      network: NETWORKS[3],
      address: "0x7e6347ddC55dF19B94C9FE893bf551CFc8C2208b"
    },
    {
      contractName: "RaffleTicket",
      description: "ERC721 NFT stands for the ticket",
      type: "Mainnet",
      network: NETWORKS[3],
      address: "0xAC426f8F34dc455Cf7Cd6379CA9a812444AccC52"
    },
  ],
  "Orada NFT QR": [
    {
      contractName: "ERC721 Factory",
      description: "Create many NFT by ERC721 standard by contract",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0xb2262361C05A751B30f58D0F367C81987140E46C"
    },
    {
      contractName: "NFT Distribution",
      description: "Distributing NFT logic",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0x175ff9cF84d9438e2048CF7E6645Edf35A282597"
    },
  ],
  "BackerzIII": [
    {
      contractName: "ERC1155 Factory",
      description: "Create many NFT by ERC1155 standard by contract",
      type: "Mainnet",
      network: NETWORKS[0],
      address: "0xF7A517DDd202d4c8721F15E2436D1E0Bb69BAFb0"
    },
    {
      contractName: "ERC721 Factory",
      description: "Create many NFT by ERC721 standard by contract",
      type: "Testnet",
      network: NETWORKS[0],
      address: "0xa1aF885B9523A8d8E154113302DA9CD0Ee7108aF"
    },
    {
      contractName: "RewardInternalDistribution",
      description: "Reward distribution for Project Owner deposit ERC721/ERC1155 rewards created by Factory ERC1155 & Factory 721. User claim them by lazy mint.",
      type: "Mainnet",
      network: NETWORKS[0],
      address: "0x98C2E7414aB689Ba635571C29813cA4868479a99"
    },
    {
      contractName: "RewardStorage",
      description: "Store reward for whole system.",
      type: "Mainnet",
      network: NETWORKS[0],
      address: "0x91030249481159e853105A4D11BA4805cd772B39"
    },
    {
      contractName: "RewardExternalDistribution",
      description: "Reward distribution for Project Owner deposit ERC721/ERC1155 rewards created by any contract. User claim them by RewardExternalDistribution.",
      type: "Mainnet",
      network: NETWORKS[0],
      address: "0xA179f72815bB33810fCd7813B4511A6205cF29f6"
    }
  ],
  "MetaX": [
    {
      contractName: "MetaXPayment",
      description: "MetaXPayment handles buy NFT from Opensea through Seaport smart contract.",
      type: "Mainnet",
      network: NETWORKS[0],
      address: "0x0Da5B14e030e72F270c0b13A543cCEAe78F17fDe"
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