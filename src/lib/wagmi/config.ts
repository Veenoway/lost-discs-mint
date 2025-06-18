/* eslint-disable @typescript-eslint/no-explicit-any */
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { cookieStorage, createStorage, fallback, http, webSocket } from "wagmi";
import { injected, metaMask, walletConnect } from "wagmi/connectors";

export const monadTestnet = {
  id: 10143,
  name: "Monad Testnet",
  network: "Monad Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "TMON",
    symbol: "TMON",
  },
  rpcUrls: {
    default: {
      http: [
        "https://monad-testnet.blockvision.org/v1/2yIlIVgRKChgqvol2h5yrqiJGb9",
      ],
      webSocket: ["wss://rpc-testnet.monadinfra.com/"],
    },
    public: {
      http: [
        "https://monad-testnet.blockvision.org/v1/2yIlIVgRKChgqvol2h5yrqiJGb9",
      ],
      webSocket: ["wss://rpc-testnet.monadinfra.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "MonadScan",
      url: "https://scan.monad.com",
    },
  },
};

// export const monadTestnet = {
//   id: 20143,
//   name: "Monad Devnet",
//   network: "Monad Devnet",
//   nativeCurrency: {
//     decimals: 18,
//     name: "DMON",
//     symbol: "DMON",
//   },
//   rpcUrls: {
//     default: {
//       http: [
//         "https://rpc-devnet.monadinfra.com/rpc/3fe540e310bbb6ef0b9f16cd23073b0a",
//       ],
//     },
//     public: {
//       http: [
//         "https://rpc-devnet.monadinfra.com/rpc/3fe540e310bbb6ef0b9f16cd23073b0a",
//       ],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: "MonadScan",
//       url: "https://scan.monad.com",
//     },
//   },
// };

export const projectId = "71cb70b160a3c0bdf69a9b358d250c4c";

if (!projectId) throw new Error("Project ID is not defined");

export const networks = [monadTestnet];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }) as unknown as any,
  ssr: true,
  networks,
  projectId,
  connectors: [
    injected(),
    metaMask(),
    walletConnect({
      projectId,
      metadata: {
        name: "Blocknads",
        description: "Blocknads Auction",
        url: "https://blocknads.art",
        icons: ["https://blocknads.art/logo-bg.jpg"],
      },
    }),
  ],
  transports: {
    [monadTestnet.id]: fallback([
      webSocket(monadTestnet.rpcUrls.default.webSocket[0]),
      http(monadTestnet.rpcUrls.default.http[0]),
    ]),
  },
});

export const config = wagmiAdapter.wagmiConfig;
