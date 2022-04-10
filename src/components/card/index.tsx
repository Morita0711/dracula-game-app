import React, { useEffect, useState } from 'react'

import { NormalBtn, OutlineBtn, NFTCard } from 'components'
import { useGameAdapter } from 'provider/GameAdapterProvider'
import { useModalText } from 'provider/ModalProvider'
import { CardProps } from 'types/components/card'
import { pageFlagProps } from 'types/pageflag'

interface MixCardAndPageProps extends pageFlagProps, CardProps {}

const Card = ({
    title,
    src,
    modalFlag,
    setModalFlag,
    pageFlag,
    humanNFTNumber,
    vampireNFTNumber,
    humanStakedNFTNumber,
    vampireStakedNFTNumber,
}: MixCardAndPageProps) => {
    // contexts
    const {
        visible: { isVisible, setIsVisible },
        modalText: { setHaveModalText },
    } = useModalText()
    const {
        loadingFlag,
        hasGameItems,
        hasStakedGameItems,
        hasStakedLotteryGameItems,
        stakeHumanFunc,
        stakeVampireFunc,
        stakeLotteryFunc,
        unstakeHumanFunc,
        unstakeVampireFunc,
        harvestHumanFunc,
        harvestVampireFunc,
        gambleHumanFunc,
        gambleVampireFunc,
    } = useGameAdapter()

    // hooks
    const [isNFTCardVisible, setIsNFTCardVisible] = useState(false)
    const [isStakedNFTCardVisible, setIsStakedNFTCardVisible] = useState(false)

    const [mintAddress, setMintAddress] = useState(null)
    const [kind, setKind] = useState(null)
    const [taxFee, setTaxFee] = useState(null)
    const [lossChance, setLossChance] = useState(null)
    const [minUnstakeAmount, setMinUnstakeAmount] = useState(null)
    const [flag, setFlag] = useState(0)
    const [rewardFlag, setRewardFlag] = useState(0)
    const [gameItmes, setGameItmes] = useState([])

    useEffect(() => {
        if (pageFlag === 'lottery') {
            if (title === 'human') {
                setGameItmes(hasStakedLotteryGameItems?.humans)
                setFlag(1)
            } else {
                setGameItmes(hasStakedLotteryGameItems?.vampires)
                setFlag(2)
            }
        } else {
            if (title === 'human') {
                setGameItmes(hasStakedGameItems?.humans)
                setFlag(3)
                setRewardFlag(3)
            } else {
                setGameItmes(hasStakedGameItems?.vampires)
                setFlag(4)
                setRewardFlag(4)
            }
        }
    }, [hasStakedLotteryGameItems, hasStakedGameItems])

    // functions
    // set modal info
    const handleModalText = async (type: string) => {
        setIsVisible(!isVisible)
        setHaveModalText({
            title: title,
            type: type,
            modalFlag: modalFlag,
            pageFlag: pageFlag,
            kind: kind,
            taxFee: taxFee,
            lossChance: lossChance,
            minUnstakeAmount: minUnstakeAmount,
            handleEvent: () => handleAction(type),
        })
    }

    // set nft info
    const handleNFTInfo = (item: any, flag: any) => {
        setMintAddress(item.mint)
        setKind(item.kind)
        setTaxFee(item.state?.taxFee)
        setLossChance(item.state?.lossChance)
        setMinUnstakeAmount(item.state?.minUnstakeAmount)

        setModalFlag && setModalFlag(flag)
    }

    /// humnan functions
    // stake action
    const handleHumanStake = () => {
        stakeHumanFunc(mintAddress)
    }
    // unstake action
    const handleHumanUnStake = () => {
        unstakeHumanFunc(mintAddress)
    }
    // stake action for lottery
    const handleStakeLottery = () => {
        stakeLotteryFunc(mintAddress)
    }
    // gamble action
    const handleHumanGamble = () => {
        gambleHumanFunc(mintAddress)
    }
    // harvest action
    const handleHumanHarvest = () => {
        harvestHumanFunc(mintAddress)
    }

    /// vampire functions
    // stake action
    const handleVampireStake = () => {
        stakeVampireFunc(mintAddress)
    }
    // unstake action
    const handleVampireUnStake = () => {
        unstakeVampireFunc(mintAddress)
    }
    // gamble action
    const handleVampireGamble = () => {
        gambleVampireFunc(mintAddress)
    }
    // harvest action
    const handleVampireHarvest = () => {
        harvestVampireFunc(mintAddress)
    }

    const handleStake = () => {
        if (pageFlag === 'lottery') {
            handleStakeLottery()
        } else {
            title === 'human' ? handleHumanStake() : handleVampireStake()
        }
    }

    const handleUnStake = () => {
        title === 'human' ? handleHumanUnStake() : handleVampireUnStake()
    }

    const handleGamble = () => {
        title === 'human' ? handleHumanGamble() : handleVampireGamble()
    }

    const handleHarvest = () => {
        title === 'human' ? handleHumanHarvest() : handleVampireHarvest()
    }

    const handleAction = (hasType: string) => {
        if (hasType === 'stake') handleStake()
        else if (hasType === 'unstake') handleUnStake()
        else if (hasType === 'gamble') handleGamble()
        else if (hasType === 'harvest') handleHarvest()
    }

    return (
        <>
            <div
                className="box-border border-[6px] border-[#17C1F7] bg-[#09164550] px-24 pt-10 pb-12 desktop:px-6 desktop:pt-6 desktop:pb-8 tablet:border-4 mobile:px-6 mobile:pb-4"
                data-aos="flip-right"
            >
                <div className="pb-4 text-center text-[48px] uppercase leading-[48px] tracking-wider desktop:text-[38px] tablet:text-[28px]">
                    {title}
                </div>
                <video autoPlay loop muted playsInline width={558} height={284}>
                    <source src={src} type="video/mp4" />
                </video>
                <div className="flex flex-col space-y-4 pt-2 mobile:space-y-2">
                    <OutlineBtn
                        loadingFlag={loadingFlag}
                        title={
                            loadingFlag
                                ? loadingFlag
                                : humanNFTNumber == 0 || vampireNFTNumber == 0
                                ? `No NFT Available : 0`
                                : `NFT Available : ${
                                      title === 'human'
                                          ? humanNFTNumber
                                          : vampireNFTNumber
                                  }`
                        }
                        handleEvent={() =>
                            setIsNFTCardVisible(!isNFTCardVisible)
                        }
                    />
                    {isNFTCardVisible &&
                        humanNFTNumber !== 0 &&
                        vampireNFTNumber !== 0 && (
                            <div className="grid max-h-[240px] grid-cols-3 gap-x-2 gap-y-4 overflow-auto border-2 border-[#17C1F7] px-1 py-4 scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-sky-500 tablet:grid-cols-2 mobile:grid-cols-1">
                                {title === 'human' ? (
                                    <>
                                        {hasGameItems?.humans.map(
                                            (item: any, index: number) => (
                                                <NFTCard
                                                    key={index}
                                                    item={item}
                                                    onClick={() => {
                                                        handleNFTInfo(item, 1)
                                                    }}
                                                />
                                            )
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {hasGameItems?.vampires.map(
                                            (item: any, index: number) => (
                                                <NFTCard
                                                    key={index}
                                                    item={item}
                                                    onClick={() => {
                                                        handleNFTInfo(item, 2)
                                                    }}
                                                />
                                            )
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    <OutlineBtn
                        loadingFlag={loadingFlag}
                        title={
                            loadingFlag
                                ? loadingFlag
                                : humanStakedNFTNumber == 0 ||
                                  vampireStakedNFTNumber == 0
                                ? `No NFT Staked : 0`
                                : `NFT Staked : ${
                                      title === 'human'
                                          ? humanStakedNFTNumber
                                          : vampireStakedNFTNumber
                                  }`
                        }
                        handleEvent={() =>
                            setIsStakedNFTCardVisible(!isStakedNFTCardVisible)
                        }
                    />
                    {isStakedNFTCardVisible &&
                        humanStakedNFTNumber !== 0 &&
                        vampireStakedNFTNumber !== 0 && (
                            <div className="grid h-full max-h-[280px] grid-cols-3 gap-x-2 gap-y-6 overflow-auto overflow-y-scroll border-2 border-[#17C1F7] px-1 py-4 scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-sky-500 tablet:grid-cols-2 mobile:grid-cols-1">
                                {gameItmes &&
                                    gameItmes.map(
                                        (item: any, index: number) => (
                                            <NFTCard
                                                key={index}
                                                item={item}
                                                rewardFlag={rewardFlag}
                                                onClick={() => {
                                                    handleNFTInfo(item, flag)
                                                }}
                                            />
                                        )
                                    )}
                            </div>
                        )}
                    <div
                        className={`grid ${
                            pageFlag === 'lottery'
                                ? 'grid-cols-1'
                                : 'grid-cols-2'
                        } gap-4 mobile:gap-2`}
                    >
                        <NormalBtn
                            loadingFlag={loadingFlag}
                            title="Stake"
                            handleEvent={() => handleModalText('stake')}
                        />
                        {pageFlag === 'lottery' ? (
                            <></>
                        ) : (
                            <>
                                <NormalBtn
                                    loadingFlag={loadingFlag}
                                    title="Unstake"
                                    handleEvent={() =>
                                        handleModalText('unstake')
                                    }
                                />
                                <NormalBtn
                                    loadingFlag={loadingFlag}
                                    title="Gamble"
                                    handleEvent={() =>
                                        handleModalText('gamble')
                                    }
                                />
                                {taxFee === 0 ? (
                                    <NormalBtn
                                        loadingFlag={loadingFlag}
                                        title="Harvest"
                                        handleEvent={() => handleHarvest()}
                                    />
                                ) : (
                                    <NormalBtn
                                        loadingFlag={loadingFlag}
                                        title="Harvest"
                                        handleEvent={() =>
                                            handleModalText('harvest')
                                        }
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
