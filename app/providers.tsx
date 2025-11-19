'use client';

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { createConfig, WagmiProvider } from 'wagmi';
import {
  mainnet,
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
// import { publicProvider } from "wagmi/providers/public";

// const {chains, publicClient} = configureChains()

const config = getDefaultConfig({
  appName: 'NFT Mini Marketplace',
  projectId: '8ba8815e58d08ec2376fba389a9e741d',
  chains: [mainnet, sepolia],
  ssr: true
})

const queryClient = new QueryClient();


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}