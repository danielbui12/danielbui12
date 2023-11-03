export const BASE_FILE_URL = "https://raw.githubusercontent.com/danielbui12/danielbui12/master/src/assets/data/";
export const BASE_WEBSITE_URL = "https://danielbui12.github.io/danielbui12/";

export const NETWORKS = ["Ethereum", "Polygon", "Mumbai"]
export const NETWORK_BASE_URI = {
  [NETWORKS[0]]: "https://etherscan.io",
  [NETWORKS[1]]: "https://polygonscan.com",
  [NETWORKS[2]]: "https://mumbai.polygonscan.com",
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
      description: "MetaXPayment handles buy NFT from Opensea through Seaport.",
      type: "Mainnet",
      network: NETWORKS[1],
      address: "0x90135839c7f8161DD13638Cc2aE4DDf01b3454fB"
    }
  ]
}