import React from "react";
import "../styles/globals.css";
// import "@defichaindomains/react-dfi-address/dist/style.css";
import Head from "next/head";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import ClientOnly from "../components/ClientOnly";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "DeFiChain Domains NFT Marketplace",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ApolloProvider client={client}>
          <Head>
            <title>DefiChain Domains NFT Marketplace</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              name="description"
              content="Buy and sell DeFiChain Domains via the NFT Marketplace"
            />
            <meta
              name="keywords"
              content="DeFiChain Domains, Marketplace, NFT Marketplace, Decentralized Domains, Web3 Domains, NFT"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
          <ClientOnly>
            <Header />

            <Component {...pageProps} />

            <Footer />
          </ClientOnly>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
