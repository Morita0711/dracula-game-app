import React, { useMemo } from 'react'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
    WalletProvider,
    ConnectionProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
// import { clusterApiUrl } from '@solana/web3.js'
import {
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletWalletAdapter,
    SolletExtensionWalletAdapter,
    TorusWalletAdapter,
    LedgerWalletAdapter,
    SolongWalletAdapter,
} from '@solana/wallet-adapter-wallets'

import { ChildrenProps } from 'types/children'

import('@solana/wallet-adapter-react-ui/styles.css' as any)

export function ClientWalletProvider({ children }: ChildrenProps) {
    const network =
        process.env.NEXT_PUBLIC_NETWORK === 'mainnet-beta'
            ? WalletAdapterNetwork.Mainnet
            : WalletAdapterNetwork.Devnet

    // const endpoint = useMemo(() => clusterApiUrl(network), [network])
    const endpoint = process.env.NEXT_PUBLIC_CUSTOM_RPC as string

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new SolletWalletAdapter({ network }),
            new SolletExtensionWalletAdapter({ network }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            new SolongWalletAdapter(),
        ],
        [network]
    )
    return (
        <>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>{children}</WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </>
    )
}

export default ClientWalletProvider
