import React, { useState } from 'react'

import { Introduction } from 'views'
import { Card, LogoText, NormalBtn } from 'components'
import { useGameAdapter } from 'provider/GameAdapterProvider'
import { useModalText } from 'provider/ModalProvider'

const StakingCards = () => {
    // contexts
    const {
        visible: { isVisible, setIsVisible },
        modalText: { setHaveModalText },
    } = useModalText()
    const {
        loadingFlag,
        claimFlag,
        hasPlayerState,
        hasGameItems,
        claimRewardsFunc,
    } = useGameAdapter()
    // hooks
    const [modalFlag, setModalFlag] = useState(0)

    // claim rewards function
    const handleModalText = async (type: string) => {
        setIsVisible(!isVisible)
        setHaveModalText({
            type: type,
            handleEvent: () => handleAction(),
        })
    }

    const handleAction = () => {
        claimRewardsFunc()
    }

    return (
        <>
            <div className="relative z-10 flex flex-col items-center pb-10">
                <div className="pt-6 pb-12 tablet:pt-4 tablet:pb-6">
                    <LogoText title="Staking" colorFlag="text-[#17C1F6]" />
                </div>
                <div className="flex space-x-[30px] pb-8 laptop:flex-col laptop:space-x-0 laptop:space-y-[30px]">
                    <Card
                        title="human"
                        src="videos/staking-human.mp4"
                        humanNFTNumber={
                            hasGameItems?.humans.length === undefined
                                ? 0
                                : hasGameItems?.humans.length
                        }
                        humanStakedNFTNumber={
                            hasPlayerState?.totalHumans === undefined
                                ? 0
                                : hasPlayerState?.totalHumans
                        }
                        pageFlag="staking"
                        modalFlag={modalFlag}
                        setModalFlag={setModalFlag}
                    />
                    <Card
                        title="vampire"
                        src="videos/staking-vampire.mp4"
                        vampireNFTNumber={
                            hasGameItems?.vampires.length === undefined
                                ? 0
                                : hasGameItems?.vampires.length
                        }
                        vampireStakedNFTNumber={
                            hasPlayerState?.totalVampires === undefined
                                ? 0
                                : hasPlayerState?.totalVampires
                        }
                        pageFlag="staking"
                        modalFlag={modalFlag}
                        setModalFlag={setModalFlag}
                    />
                </div>
                <div className="space-y-8">
                    {claimFlag && (
                        <div
                            className="grid grid-cols-2 items-center gap-4 border-[6px] border-[#17C1F6] bg-[#09164550] p-10 laptop:flex-col tablet:grid-cols-1 tablet:border-4"
                            data-aos="fade-up"
                        >
                            <div className="text-center text-[20px] uppercase tablet:text-[18px] mobile:text-[16px] ">
                                {loadingFlag
                                    ? loadingFlag
                                    : `You have earned ${hasPlayerState?.claimableAmount.toNumber()} $BLOOD`}
                            </div>
                            <NormalBtn
                                loadingFlag={loadingFlag}
                                title="Claim"
                                handleEvent={() => handleModalText('claim')}
                            />
                        </div>
                    )}
                    <Introduction />
                </div>
            </div>
        </>
    )
}

export default StakingCards
