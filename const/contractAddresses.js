/** Replace the values below with the addresses of your smart contracts. */

// 2. The address of the marketplace V3 smart contract.
export const MARKETPLACE_ADDRESS = "0xDF5d3bd7A5b113880ba9FC3C38AB034533fBcFc1";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x04AE965f4a9079A6ED02309373AFcbf841170c51";

export const DEFICHAINDOMAINS_REGISTRY_ADDRESS =
  "0xCa33092AE06D170791C1d0E1177e884Db8b1eEBF";

export const DEFICHAINDOMAINS_RESOLVER_ADDRESS =
  "0x35702556b74f79eE1014A966eb1cC880Dc0b87Ee";

// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";

export const DEFICHAINDOMAINS_RESOLVER_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "contentType",
        type: "uint256",
      },
    ],
    name: "ABIChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "AddrChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coinType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newAddress",
        type: "bytes",
      },
    ],
    name: "AddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "ContentChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "hash",
        type: "bytes",
      },
    ],
    name: "ContenthashChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "NameChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "x",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "y",
        type: "bytes32",
      },
    ],
    name: "PubkeyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "string",
        name: "indexedKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "TextChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "contentTypes",
        type: "uint256",
      },
    ],
    name: "ABI",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "addr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "coinType",
        type: "uint256",
      },
    ],
    name: "addr",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "content",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "contenthash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "dnsrr",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "interfaceImplementer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "multihash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "pubkey",
    outputs: [
      {
        internalType: "bytes32",
        name: "x",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "y",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "contentType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setABI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "coinType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "a",
        type: "bytes",
      },
    ],
    name: "setAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "setAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "setContent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "hash",
        type: "bytes",
      },
    ],
    name: "setContenthash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setDnsrr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "implementer",
        type: "address",
      },
    ],
    name: "setInterface",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "hash",
        type: "bytes",
      },
    ],
    name: "setMultihash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "x",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "y",
        type: "bytes32",
      },
    ],
    name: "setPubkey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setText",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "text",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const DEFICHAINDOMAINS_REGISTRY_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "node", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "node", type: "bytes32" },
      {
        indexed: false,
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "NewResolver",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "node", type: "bytes32" },
      { indexed: false, internalType: "uint64", name: "ttl", type: "uint64" },
    ],
    name: "NewTTL",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "node", type: "bytes32" },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
    name: "recordExists",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
    name: "resolver",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "node", type: "bytes32" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "node", type: "bytes32" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "resolver", type: "address" },
      { internalType: "uint64", name: "ttl", type: "uint64" },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "node", type: "bytes32" },
      { internalType: "address", name: "resolver", type: "address" },
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "node", type: "bytes32" },
      { internalType: "bytes32", name: "label", type: "bytes32" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "setSubnodeOwner",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "node", type: "bytes32" },
      { internalType: "bytes32", name: "label", type: "bytes32" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "resolver", type: "address" },
      { internalType: "uint64", name: "ttl", type: "uint64" },
    ],
    name: "setSubnodeRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "node", type: "bytes32" },
      { internalType: "uint64", name: "ttl", type: "uint64" },
    ],
    name: "setTTL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
    name: "ttl",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
];

export const MARKETPLACE_ABI = [
  {
    type: "event",
    name: "ContractURIUpdated",
    inputs: [
      {
        type: "string",
        name: "prevURI",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "newURI",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PlatformFeeInfoUpdated",
    inputs: [
      {
        type: "address",
        name: "platformFeeRecipient",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "platformFeeBps",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PluginAdded",
    inputs: [
      {
        type: "bytes4",
        name: "functionSelector",
        indexed: true,
        internalType: "bytes4",
      },
      {
        type: "address",
        name: "pluginAddress",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PluginRemoved",
    inputs: [
      {
        type: "bytes4",
        name: "functionSelector",
        indexed: true,
        internalType: "bytes4",
      },
      {
        type: "address",
        name: "pluginAddress",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PluginSet",
    inputs: [
      {
        type: "bytes4",
        name: "functionSelector",
        indexed: true,
        internalType: "bytes4",
      },
      {
        type: "string",
        name: "functionSignature",
        indexed: true,
        internalType: "string",
      },
      {
        type: "address",
        name: "pluginAddress",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PluginUpdated",
    inputs: [
      {
        type: "bytes4",
        name: "functionSelector",
        indexed: true,
        internalType: "bytes4",
      },
      {
        type: "address",
        name: "oldPluginAddress",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "newPluginAddress",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "previousAdminRole",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "newAdminRole",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "fallback",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_getPluginForFunction",
    inputs: [
      {
        type: "bytes4",
        name: "_selector",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addPlugin",
    inputs: [
      {
        type: "tuple",
        name: "_plugin",
        components: [
          {
            type: "bytes4",
            name: "functionSelector",
            internalType: "bytes4",
          },
          {
            type: "string",
            name: "functionSignature",
            internalType: "string",
          },
          {
            type: "address",
            name: "pluginAddress",
            internalType: "address",
          },
        ],
        internalType: "struct IPluginMap.Plugin",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "contractType",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "contractURI",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contractVersion",
    inputs: [],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "getAllFunctionsOfPlugin",
    inputs: [
      {
        type: "address",
        name: "_pluginAddress",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bytes4[]",
        name: "registered",
        internalType: "bytes4[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllPlugins",
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        name: "registered",
        components: [
          {
            type: "bytes4",
            name: "functionSelector",
            internalType: "bytes4",
          },
          {
            type: "string",
            name: "functionSignature",
            internalType: "string",
          },
          {
            type: "address",
            name: "pluginAddress",
            internalType: "address",
          },
        ],
        internalType: "struct IPluginMap.Plugin[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlatformFeeInfo",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPluginForFunction",
    inputs: [
      {
        type: "bytes4",
        name: "_selector",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleMember",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "index",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "member",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleMemberCount",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "count",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasRoleWithSwitch",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        type: "address",
        name: "_defaultAdmin",
        internalType: "address",
      },
      {
        type: "string",
        name: "_contractURI",
        internalType: "string",
      },
      {
        type: "address[]",
        name: "_trustedForwarders",
        internalType: "address[]",
      },
      {
        type: "address",
        name: "_platformFeeRecipient",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "_platformFeeBps",
        internalType: "uint16",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isTrustedForwarder",
    inputs: [
      {
        type: "address",
        name: "forwarder",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "multicall",
    inputs: [
      {
        type: "bytes[]",
        name: "data",
        internalType: "bytes[]",
      },
    ],
    outputs: [
      {
        type: "bytes[]",
        name: "results",
        internalType: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "pluginMap",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removePlugin",
    inputs: [
      {
        type: "bytes4",
        name: "_selector",
        internalType: "bytes4",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setContractURI",
    inputs: [
      {
        type: "string",
        name: "_uri",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPlatformFeeInfo",
    inputs: [
      {
        type: "address",
        name: "_platformFeeRecipient",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_platformFeeBps",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updatePlugin",
    inputs: [
      {
        type: "tuple",
        name: "_plugin",
        components: [
          {
            type: "bytes4",
            name: "functionSelector",
            internalType: "bytes4",
          },
          {
            type: "string",
            name: "functionSignature",
            internalType: "string",
          },
          {
            type: "address",
            name: "pluginAddress",
            internalType: "address",
          },
        ],
        internalType: "struct IPluginMap.Plugin",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "BuyerApprovedForListing",
    inputs: [
      {
        type: "uint256",
        name: "listingId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "buyer",
        indexed: true,
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CancelledListing",
    inputs: [
      {
        type: "address",
        name: "listingCreator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "listingId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CurrencyApprovedForListing",
    inputs: [
      {
        type: "uint256",
        name: "listingId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "currency",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "pricePerToken",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewListing",
    inputs: [
      {
        type: "address",
        name: "listingCreator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "listingId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "tuple",
        name: "listing",
        components: [
          {
            type: "uint256",
            name: "listingId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "listingCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
          {
            type: "bool",
            name: "reserved",
            internalType: "bool",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IDirectListings.Status",
          },
        ],
        indexed: false,
        internalType: "struct IDirectListings.Listing",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewSale",
    inputs: [
      {
        type: "address",
        name: "listingCreator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "listingId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "buyer",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "quantityBought",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "totalPricePaid",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpdatedListing",
    inputs: [
      {
        type: "address",
        name: "listingCreator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "listingId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "tuple",
        name: "listing",
        components: [
          {
            type: "uint256",
            name: "listingId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "listingCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
          {
            type: "bool",
            name: "reserved",
            internalType: "bool",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IDirectListings.Status",
          },
        ],
        indexed: false,
        internalType: "struct IDirectListings.Listing",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "MAX_BPS",
    inputs: [],
    outputs: [
      {
        type: "uint64",
        name: "",
        internalType: "uint64",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_msgData",
    inputs: [],
    outputs: [
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_msgSender",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "sender",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approveBuyerForListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_buyer",
        internalType: "address",
      },
      {
        type: "bool",
        name: "_toApprove",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approveCurrencyForListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_currency",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_pricePerTokenInCurrency",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "buyFromListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_buyFor",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_quantity",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_currency",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_expectedTotalPrice",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "cancelListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createListing",
    inputs: [
      {
        type: "tuple",
        name: "_params",
        components: [
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
          {
            type: "bool",
            name: "reserved",
            internalType: "bool",
          },
        ],
        internalType: "struct IDirectListings.ListingParameters",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "listingId",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "currencyPriceForListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_currency",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllListings",
    inputs: [
      {
        type: "uint256",
        name: "_startId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_endId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "_allListings",
        components: [
          {
            type: "uint256",
            name: "listingId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "listingCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
          {
            type: "bool",
            name: "reserved",
            internalType: "bool",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IDirectListings.Status",
          },
        ],
        internalType: "struct IDirectListings.Listing[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllValidListings",
    inputs: [
      {
        type: "uint256",
        name: "_startId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_endId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "_validListings",
        components: [
          {
            type: "uint256",
            name: "listingId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "listingCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
          {
            type: "bool",
            name: "reserved",
            internalType: "bool",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IDirectListings.Status",
          },
        ],
        internalType: "struct IDirectListings.Listing[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "listing",
        components: [
          {
            type: "uint256",
            name: "listingId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "listingCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
          {
            type: "bool",
            name: "reserved",
            internalType: "bool",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IDirectListings.Status",
          },
        ],
        internalType: "struct IDirectListings.Listing",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isBuyerApprovedForListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_buyer",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isCurrencyApprovedForListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_currency",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalListings",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateListing",
    inputs: [
      {
        type: "uint256",
        name: "_listingId",
        internalType: "uint256",
      },
      {
        type: "tuple",
        name: "_params",
        components: [
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
          {
            type: "bool",
            name: "reserved",
            internalType: "bool",
          },
        ],
        internalType: "struct IDirectListings.ListingParameters",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AuctionClosed",
    inputs: [
      {
        type: "uint256",
        name: "auctionId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "closer",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "auctionCreator",
        indexed: false,
        internalType: "address",
      },
      {
        type: "address",
        name: "winningBidder",
        indexed: false,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CancelledAuction",
    inputs: [
      {
        type: "address",
        name: "auctionCreator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "auctionId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewAuction",
    inputs: [
      {
        type: "address",
        name: "auctionCreator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "auctionId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "tuple",
        name: "auction",
        components: [
          {
            type: "uint256",
            name: "auctionId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "auctionCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "minimumBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "buyoutBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint64",
            name: "timeBufferInSeconds",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "bidBufferBps",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "startTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "endTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IEnglishAuctions.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IEnglishAuctions.Status",
          },
        ],
        indexed: false,
        internalType: "struct IEnglishAuctions.Auction",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewBid",
    inputs: [
      {
        type: "uint256",
        name: "auctionId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "bidder",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "bidAmount",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "tuple",
        name: "auction",
        components: [
          {
            type: "uint256",
            name: "auctionId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "auctionCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "minimumBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "buyoutBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint64",
            name: "timeBufferInSeconds",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "bidBufferBps",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "startTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "endTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IEnglishAuctions.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IEnglishAuctions.Status",
          },
        ],
        indexed: false,
        internalType: "struct IEnglishAuctions.Auction",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "bidInAuction",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_bidAmount",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "cancelAuction",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "collectAuctionPayout",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "collectAuctionTokens",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createAuction",
    inputs: [
      {
        type: "tuple",
        name: "_params",
        components: [
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "minimumBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "buyoutBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint64",
            name: "timeBufferInSeconds",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "bidBufferBps",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "startTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "endTimestamp",
            internalType: "uint64",
          },
        ],
        internalType: "struct IEnglishAuctions.AuctionParameters",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "auctionId",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllAuctions",
    inputs: [
      {
        type: "uint256",
        name: "_startId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_endId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "_allAuctions",
        components: [
          {
            type: "uint256",
            name: "auctionId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "auctionCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "minimumBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "buyoutBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint64",
            name: "timeBufferInSeconds",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "bidBufferBps",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "startTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "endTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IEnglishAuctions.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IEnglishAuctions.Status",
          },
        ],
        internalType: "struct IEnglishAuctions.Auction[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllValidAuctions",
    inputs: [
      {
        type: "uint256",
        name: "_startId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_endId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "_validAuctions",
        components: [
          {
            type: "uint256",
            name: "auctionId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "auctionCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "minimumBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "buyoutBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint64",
            name: "timeBufferInSeconds",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "bidBufferBps",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "startTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "endTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IEnglishAuctions.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IEnglishAuctions.Status",
          },
        ],
        internalType: "struct IEnglishAuctions.Auction[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAuction",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "_auction",
        components: [
          {
            type: "uint256",
            name: "auctionId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "auctionCreator",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "minimumBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "buyoutBidAmount",
            internalType: "uint256",
          },
          {
            type: "uint64",
            name: "timeBufferInSeconds",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "bidBufferBps",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "startTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint64",
            name: "endTimestamp",
            internalType: "uint64",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IEnglishAuctions.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IEnglishAuctions.Status",
          },
        ],
        internalType: "struct IEnglishAuctions.Auction",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getWinningBid",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "_bidder",
        internalType: "address",
      },
      {
        type: "address",
        name: "_currency",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_bidAmount",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isAuctionExpired",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isNewWinningBid",
    inputs: [
      {
        type: "uint256",
        name: "_auctionId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_bidAmount",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalAuctions",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AcceptedOffer",
    inputs: [
      {
        type: "address",
        name: "offeror",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "offerId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "seller",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "quantityBought",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "totalPricePaid",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CancelledOffer",
    inputs: [
      {
        type: "address",
        name: "offeror",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "offerId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewOffer",
    inputs: [
      {
        type: "address",
        name: "offeror",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "offerId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "assetContract",
        indexed: true,
        internalType: "address",
      },
      {
        type: "tuple",
        name: "offer",
        components: [
          {
            type: "uint256",
            name: "offerId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "offeror",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "totalPrice",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "expirationTimestamp",
            internalType: "uint256",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IOffers.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IOffers.Status",
          },
        ],
        indexed: false,
        internalType: "struct IOffers.Offer",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "acceptOffer",
    inputs: [
      {
        type: "uint256",
        name: "_offerId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelOffer",
    inputs: [
      {
        type: "uint256",
        name: "_offerId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllOffers",
    inputs: [
      {
        type: "uint256",
        name: "_startId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_endId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "_allOffers",
        components: [
          {
            type: "uint256",
            name: "offerId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "offeror",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "totalPrice",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "expirationTimestamp",
            internalType: "uint256",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IOffers.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IOffers.Status",
          },
        ],
        internalType: "struct IOffers.Offer[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllValidOffers",
    inputs: [
      {
        type: "uint256",
        name: "_startId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_endId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "_validOffers",
        components: [
          {
            type: "uint256",
            name: "offerId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "offeror",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "totalPrice",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "expirationTimestamp",
            internalType: "uint256",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IOffers.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IOffers.Status",
          },
        ],
        internalType: "struct IOffers.Offer[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOffer",
    inputs: [
      {
        type: "uint256",
        name: "_offerId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "_offer",
        components: [
          {
            type: "uint256",
            name: "offerId",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "offeror",
            internalType: "address",
          },
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "totalPrice",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "expirationTimestamp",
            internalType: "uint256",
          },
          {
            type: "uint8",
            name: "tokenType",
            internalType: "enum IOffers.TokenType",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum IOffers.Status",
          },
        ],
        internalType: "struct IOffers.Offer",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "makeOffer",
    inputs: [
      {
        type: "tuple",
        name: "_params",
        components: [
          {
            type: "address",
            name: "assetContract",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "tokenId",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantity",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "totalPrice",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "expirationTimestamp",
            internalType: "uint256",
          },
        ],
        internalType: "struct IOffers.OfferParams",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "_offerId",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "totalOffers",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
];
export const REGISTRAR_ABI = [
  {
    inputs: [
      {
        internalType: "contract ENS",
        name: "_ens",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_baseNode",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "ControllerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "ControllerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NameRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "addController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseNode",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "controllers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ens",
    outputs: [
      {
        internalType: "contract ENS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "reclaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "registerOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "removeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
