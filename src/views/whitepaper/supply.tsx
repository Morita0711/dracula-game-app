import React from 'react'

const Supply = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col">
                <div
                    className="pt-12 pb-6 text-center text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Supply & Burn mechanism
                </div>
                <div className="space-y-5 text-[16px] leading-[26px] tracking-[0.02em] tablet:space-y-3 tablet:text-[12px]">
                    <div className="font-bold" data-aos="fade-up">
                        The maximum $BLOOD supply is 2,674,500,000 $BLOOD:
                    </div>
                    <ul
                        className="list-inside list-disc space-y-2 tablet:space-y-1"
                        data-aos="fade-up"
                    >
                        <li>
                            When supply reaches 1,283,760,000 $BLOOD earned for
                            staking, the staking “faucet” turns off.
                        </li>
                        <li>
                            The 320,940,000 $BLOOD reserved for the team will be
                            used to burn the supply.
                        </li>
                        <li>
                            Community Rewards will be allocated 1,069,800,000
                            $BLOOD
                        </li>
                    </ul>
                    <div className="font-bold" data-aos="fade-up">
                        We will add 1604 $SOL from the mint for the $BLOOD
                        Liquidity Pool and the Staking pool
                    </div>
                    <ul
                        className="list-inside list-disc space-y-2 tablet:space-y-1"
                        data-aos="fade-up"
                    >
                        <li>
                            We will start with a price of: 1 $BLOOD = 0.000035
                            $SOL. With this price you will generate between
                            0.2-0.35 SOL/day in $BLOOD
                        </li>
                    </ul>
                    <div className="font-bold" data-aos="fade-up">
                        To burn the supply we have in mind different options to
                        assure a good ROI to all our holders.
                    </div>
                    <ul
                        className="list-inside list-disc space-y-2 tablet:space-y-1"
                        data-aos="fade-up"
                    >
                        <li>
                            All the $BLOOD used to mint the gen 1, 2 & 3 will be
                            burned.
                        </li>
                        <li>A percentage of royalties will be used.</li>
                        <li>
                            Liquidity provider fee of our token will be used to
                            buy back.
                        </li>
                        <li>
                            The lottery and gamble system are here to reduce the
                            daily reward per user in the goal to burn more
                            supply
                        </li>
                        <li>
                            All the unstaking tax for vampires will be burned
                            too.
                        </li>
                    </ul>
                    <div className="font-bold" data-aos="fade-up">
                        We are going to add liquidity in different vaults.
                    </div>
                    <ul
                        className="list-inside list-disc space-y-2 tablet:space-y-1"
                        data-aos="fade-up"
                    >
                        <li>
                            You will be able to stake your $BLOOD received by
                            your vampire or your human and earn different
                            currencies like $SOL or $RAY.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Supply
