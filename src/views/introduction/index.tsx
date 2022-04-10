import React from 'react'

import { Label } from 'components'
import { pageFlagProps } from 'types/pageflag'

const Introduction = ({ pageFlag }: pageFlagProps) => {
    const stake = 'Stake your nft to earn your daily $BLOOD rewards'
    const unstake =
        'You can leave the lab to fight your opponents again but be careful you can lose a lot of Blood forever'
    const gamble =
        'Are you a gambler? If you like risk you can multiply your rewards! Or lose everything...'
    const harvest =
        'You can collect your rewards at any time but a blood donation will be required'
    return (
        <>
            <div
                className="flex flex-col items-center space-y-8 border-[6px] border-[#17C1F7] bg-[#09164550] py-8 px-[130px] desktop:px-10 tablet:border-4 mobile:px-6 mobile:py-6"
                data-aos="fade-up"
            >
                <div className="text-center text-[24px] uppercase leading-8 tracking-[0.02em] desktop:text-[18px] tablet:text-[16px]">
                    Collect Blood passively and let your NFTs work for you.
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <div className="grid grid-cols-2 gap-x-[30px] gap-y-4 tablet:grid-cols-1">
                        <Label title={'Stake : '} content={stake} />
                        {pageFlag === 'lottery' ? (
                            <></>
                        ) : (
                            <>
                                <Label title={'Gamble : '} content={gamble} />
                                <Label title={'Unstake : '} content={unstake} />
                                <Label title={'Harvest : '} content={harvest} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction
