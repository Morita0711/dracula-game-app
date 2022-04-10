import React from 'react'

const LotteryContent = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col items-center">
                <div
                    className="pt-12 pb-6 text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:pt-10 tablet:pb-4 tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Lottery
                </div>
                <div className="text-[16px] leading-[26px] tracking-[0.02em] tablet:text-[12px]">
                    <div data-aos="fade-up">
                        You can stake your NFT in a lottery instead of the
                        staking of the game. Every 3 days we will run a new
                        lottery and 10 raffle winners will be drawn randomly.
                        The cash prize amount will depend on the staked supply
                        in the lottery.
                    </div>
                    <div data-aos="fade-up">
                        For example if there is 20% of the supply staked in the
                        lottery the cash prize will to share of 27m $BLOOD so
                        2.7 millions/pers. At the starting price of $BLOOD it
                        will be worth 10k$.
                    </div>
                </div>
            </div>
        </>
    )
}

export default LotteryContent
