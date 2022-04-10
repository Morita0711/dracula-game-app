import React, { useEffect, useState } from 'react'

import { Introduction } from 'views'
import { Card, LogoText, Timer } from 'components'
import { useGameAdapter } from 'provider/GameAdapterProvider'
import { pageFlagProps } from 'types/pageflag'

const LotteryCards = ({ pageFlag }: pageFlagProps) => {
    // contexts
    const { hasGameItems, hasStakedLotteryGameItems, hasLotteryPool } =
        useGameAdapter()
    // hooks
    const [modalFlag, setModalFlag] = useState(0)
    const [timerText, setTimerText] = useState('')

    const [tdate, setTDate] = useState<any>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    let intervalInstance: NodeJS.Timer
    let distance
    let now = new Date().getTime()

    useEffect(() => {
        if (now > hasLotteryPool?.endTime.getTime()) {
            setTimerText(`Lottery ended at ${hasLotteryPool.endTime}`)
        } else if (now < hasLotteryPool?.startTime.getTime()) {
            setTimerText(`Lottery starts in ...`)
        } else if (
            now > hasLotteryPool?.startTime.getTime() &&
            now < hasLotteryPool?.endTime.getTime()
        ) {
            setTimerText(`Lottery ends in ...`)
        }

        let isMounted = true

        intervalInstance = setInterval(() => getDistance(isMounted), 1000)
        return () => {
            isMounted = false
            clearInterval(intervalInstance)
        }
    }, [hasLotteryPool])

    // functions
    const getDistance = (isMounted = true) => {
        let countDownDate: any
        if (now < hasLotteryPool?.startTime.getTime()) {
            countDownDate = new Date(hasLotteryPool?.startTime).getTime()
        } else if (
            now > hasLotteryPool?.startTime.getTime() &&
            now < hasLotteryPool?.endTime.getTime()
        ) {
            countDownDate = new Date(hasLotteryPool?.endTime).getTime()
        }
        distance = countDownDate - new Date().getTime()

        if (!(countDownDate > 0)) {
            distance = 0
        }
        if (distance <= 0) {
            distance = 0
            clearInterval(intervalInstance)
        }
        isMounted &&
            setTDate({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
    }

    return (
        <>
            <div className="relative z-10 flex flex-col items-center pb-10">
                <div className="pt-6 pb-12 tablet:pt-4 tablet:pb-6">
                    <LogoText title="Lottery" colorFlag="text-[#17C1F6]" />
                </div>
                <div
                    className="mb-4 flex w-full flex-col items-center justify-center space-x-2 border-[6px] border-[#17C1F7] p-6 laptop:w-auto tablet:w-full tablet:max-w-[614px] tablet:border-4 tablet:p-4"
                    data-aos="fade-up"
                >
                    <div className="text-center text-[40px] leading-[80px] tablet:text-[24px] tablet:leading-[60px] mobile:text-[18px] mobile:leading-[40px]">
                        Liquidity: {hasLotteryPool?.liquidity.toLocaleString()}{' '}
                        $BLOOD
                    </div>
                    <div className="pb-4 text-center text-[20px] tablet:text-[16px] mobile:text-[14px]">
                        {timerText}
                    </div>
                    <div className="grid grid-cols-4 gap-10 laptop:gap-6 mobile:grid-cols-2 mobile:gap-4">
                        <Timer numberTimer={tdate.days} stringTimer={'days'} />
                        <Timer
                            numberTimer={tdate.hours}
                            stringTimer={'hours'}
                        />
                        <Timer
                            numberTimer={tdate.minutes}
                            stringTimer={'minutes'}
                        />
                        <Timer
                            numberTimer={tdate.seconds}
                            stringTimer={'seconds'}
                        />
                    </div>
                </div>
                <div className="flex w-full justify-between space-x-[30px] pb-8 laptop:w-auto laptop:flex-col laptop:space-x-0 laptop:space-y-[30px]">
                    <Card
                        title="human"
                        src="videos/lottery-human.mp4"
                        humanNFTNumber={
                            hasGameItems?.humans.length === undefined
                                ? 0
                                : hasGameItems?.humans.length
                        }
                        humanStakedNFTNumber={
                            hasStakedLotteryGameItems?.humans.length ===
                            undefined
                                ? 0
                                : hasStakedLotteryGameItems?.humans.length
                        }
                        pageFlag="lottery"
                        modalFlag={modalFlag}
                        setModalFlag={setModalFlag}
                    />
                    <Card
                        title="vampire"
                        src="videos/lottery-vampire.mp4"
                        vampireNFTNumber={
                            hasGameItems?.vampires.length === undefined
                                ? 0
                                : hasGameItems?.vampires.length
                        }
                        vampireStakedNFTNumber={
                            hasStakedLotteryGameItems?.vampires.length ===
                            undefined
                                ? 0
                                : hasStakedLotteryGameItems?.vampires.length
                        }
                        pageFlag="lottery"
                        modalFlag={modalFlag}
                        setModalFlag={setModalFlag}
                    />
                </div>
                <Introduction pageFlag={pageFlag} />
            </div>
        </>
    )
}

export default LotteryCards
