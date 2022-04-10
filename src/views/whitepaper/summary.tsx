import React from 'react'

const SummaryContent = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col">
                <div
                    className="pt-12 pb-6 text-center text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:pt-10 tablet:pb-4 tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Summary
                </div>
                <ul className="list-outside list-decimal space-y-2 px-4 text-[16px] leading-[26px] tracking-[0.02em] tablet:space-y-1 tablet:text-[12px]">
                    <li data-aos="fade-up">
                        There will be 5349 gen 0 minted with $SOL.
                    </li>
                    <li data-aos="fade-up">
                        Then the other generation will be minted with $BLOOD.
                    </li>
                    <li data-aos="fade-up">
                        A human can stake at the lab to earn $BLOOD.
                    </li>
                    <li data-aos="fade-up">
                        If you harvest to claim your $BLOOD you have to pay a
                        tax to the vampire or they kill you.
                    </li>
                    <li data-aos="fade-up">
                        Unstake is at your own risk, the vampires are waiting
                        for you at the exit of the lab to take all your $BLOOD.
                    </li>
                    <li data-aos="fade-up">
                        When a new human is born, the vampires attempt to kidnap
                        it. If they’re successful, it’s given to a randomly
                        selected vampire, instead of the owner who minted it.
                    </li>
                    <li data-aos="fade-up">
                        Possibility to stake your nft in a lottery instead of
                        the game to earn a huge cash prize.
                    </li>
                    <li data-aos="fade-up">
                        Burning mechanism to keep the price of the $BLOOD high
                        and have a high ROI/day.
                    </li>
                    <li data-aos="fade-up">
                        Staking system for your $BLOOD to earn different
                        cryptocurrencies from $Solana ecosystem with high APR.
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SummaryContent
