import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { GameAdapter, GameConfig, Player } from 'dracula-game-sdk'
import {
    AnchorWallet,
    useAnchorWallet,
    useConnection,
    useWallet,
} from '@solana/wallet-adapter-react'
import { Provider } from '@project-serum/anchor'
import { PublicKey } from '@solana/web3.js'
import { toast } from 'react-toastify'

import { isError } from 'utils/isError'
import { ChildrenProps } from 'types/children'

import { HiOutlineExternalLink } from 'react-icons/hi'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'

//  Create context
const GameAdapterContext = createContext({})

const GameAdapterProvider = ({ children }: ChildrenProps) => {
    const router = useRouter()

    const [loadingFlag, setLoadingFlag] = useState('')
    const [claimFlag, setClaimFlag] = useState(false)
    const [hasPlayerState, setHasPlayerState] = useState<any>(null)
    const [hasGameItems, setHasGameItems] = useState<any>(null)
    const [hasStakedGameItems, setHasStakedGameItems] = useState<any>(null)
    const [hasStakedLotteryGameItems, setHasStakedLotteryGameItems] =
        useState<any>(null)
    const [hasLotteryPool, setHasLotteryPool] = useState<any>(null)

    const { connection } = useConnection()
    const { wallet, publicKey, sendTransaction } = useWallet()
    const wallets = useAnchorWallet()
    const network = process.env.NEXT_PUBLIC_NETWORK

    const provider = new Provider(
        connection,
        wallets as AnchorWallet,
        { skipPreflight: false, preflightCommitment: 'confirmed' }
        // Provider.defaultOptions() // preflightCommitment: 'confirmed'
    )
    const config: GameConfig = {
        mint: new PublicKey(process.env.NEXT_PUBLIC_MINT_PUBKEY as string),
        apiEndpoint: process.env.NEXT_PUBLIC_API_URL as string,
    }
    const adapter = new GameAdapter(provider, config)

    let player: any

    useEffect(() => {
        ;(async () => {
            await initGamePlayer()
            if (!publicKey) {
                toast.error('Please connect your wallet!')
                resetDataDisconnectedWallet()
                setClaimFlag(false)
                return new WalletNotConnectedError()
            }

            toast.success(`${wallet?.adapter.name} wallet connected`)
            player = new Player(adapter)
        })()
    }, [publicKey])

    useEffect(() => {
        if (publicKey) {
            ;(async () => {
                await initGamePlayer()
                player = new Player(adapter)
                setLoadingFlag('Loading ...')
                if (router.route === '/lottery') {
                    getLotteryDataFromProgram()
                } else if (router.route === '/staking') {
                    getDataFromProgram()
                }
                setClaimFlag(true)
            })()
        }
    }, [router.route, publicKey])

    const initGamePlayer = async () => {
        await adapter.build()
        getLiquidityInfo()
    }

    /// data load function from program
    const getLiquidityInfo = async () => {
        const lotteryPool = await adapter.getLotteryPool()
        setHasLotteryPool(lotteryPool)
    }

    const getDataFromProgram = async () => {
        try {
            const playerState = await player.getState()
            const gameItems = await player.getGameItems()
            const stakedGameItems = await player.getStakedGameItemsV2()

            Promise.all([
                setHasPlayerState(playerState),
                setHasGameItems(gameItems),
                setHasStakedGameItems(stakedGameItems),
                setLoadingFlag(''),
            ])
        } catch (err: any) {
            console.log(err)
            toast.error('Please confirm your network connection')
        }
    }

    const getLotteryDataFromProgram = async () => {
        try {
            const gameItems = await player.getGameItems()
            const stakedLotteryGameItems =
                await player.getStakedLotteryGameItems()

            setHasGameItems(gameItems)
            setHasStakedLotteryGameItems(stakedLotteryGameItems)
            setLoadingFlag('')
        } catch (err: any) {
            console.log(err)
            toast.error('Please confirm your network connection')
        }
    }

    const resetDataDisconnectedWallet = async () => {
        setHasPlayerState(null)
        setHasGameItems(null)
        setHasStakedGameItems(null)
        setHasStakedLotteryGameItems(null)
        setHasLotteryPool(null)
    }

    const runTrans = async (tx: any) => {
        try {
            let signature = await sendTransaction(tx, connection)
            setLoadingFlag('Reloading ...')
            await connection.confirmTransaction(signature, 'confirmed')

            if (router.route === '/lottery') {
                getLotteryDataFromProgram()
            } else if (router.route === '/staking') {
                getDataFromProgram()
            }

            toast.success(
                <Link
                    href={`https://explorer.solana.com/tx/${signature}?cluster=${network}`}
                >
                    <a
                        target="_blank"
                        rel="noopener noreferer"
                        className="flex space-x-1"
                    >
                        <span>Success! Transaction </span>
                        <span>
                            <HiOutlineExternalLink fontSize={20} />
                        </span>
                    </a>
                </Link>
            )
        } catch (err) {
            console.log(err, 'error')
            isError(err)
        }
    }

    /// stake functions
    //  human stake function
    const stakeHumanFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.stakeHuman(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }
    //  human stake function for lottery
    const stakeLotteryFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.stake2Lottery(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }
    //  vampire stake function
    const stakeVampireFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.stakeVampire(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }

    /// unstake functions
    //  human unstake function
    const unstakeHumanFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.unstakeHuman(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error(
                "You don't have enough $BLOOD accumulated to unstake this Vampire."
            )
        }
    }
    //  vampire unstake function
    const unstakeVampireFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.unstakeVampire(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error(
                "You don't have enough $BLOOD accumulated to unstake this Vampire."
            )
        }
    }

    /// harvest functions
    //  human harvest function
    const harvestHumanFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.harvestHuman(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }
    //  vampire harvest function
    const harvestVampireFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.harvestVampire(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }

    /// gamble functions
    // human gamble function
    const gambleHumanFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.gambleHuman(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }
    // human gamble function
    const gambleVampireFunc = async (mint: PublicKey) => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.gambleVampire(new PublicKey(mint))
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }

    /// claim rewards function
    const claimRewardsFunc = async () => {
        try {
            await initGamePlayer()
            player = new Player(adapter)
            const tx = await player.claimRewards()
            await runTrans(tx)
        } catch (err: any) {
            console.log(err, 'error')
            toast.error('Transaction failed')
        }
    }

    return (
        <>
            <GameAdapterContext.Provider
                value={{
                    publicKey,
                    loadingFlag,
                    claimFlag,
                    hasPlayerState,
                    hasGameItems,
                    hasStakedGameItems,
                    hasStakedLotteryGameItems,
                    hasLotteryPool,
                    stakeHumanFunc,
                    stakeVampireFunc,
                    stakeLotteryFunc,
                    unstakeHumanFunc,
                    unstakeVampireFunc,
                    harvestHumanFunc,
                    harvestVampireFunc,
                    gambleHumanFunc,
                    gambleVampireFunc,
                    claimRewardsFunc,
                }}
            >
                {children}
            </GameAdapterContext.Provider>
        </>
    )
}

//  Use context
export const useGameAdapter = () => {
    return useContext<any>(GameAdapterContext)
}

export default GameAdapterProvider
