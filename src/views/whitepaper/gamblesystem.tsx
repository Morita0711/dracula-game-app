import React from 'react'

const GambleSystem = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col items-center">
                <div
                    className="pt-12 pb-6 text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:pt-10 tablet:pb-4 tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Gamble System
                </div>
                <div className="space-y-5 text-[16px] leading-[26px] tracking-[0.02em] tablet:space-y-3 tablet:text-[12px]">
                    <div data-aos="fade-up">
                        When you harvest you have the opportunity to double or
                        nothing and quadruple or nothing.
                    </div>
                    <div data-aos="fade-up">
                        For the mint of generation 1, 2, 3 you will have the
                        opportunity to gamble your mint. You pay 20% of the mint
                        price of the generation and you have a 10% chance to
                        finish with a successful mint. Example: It’s gen 2 time
                        so you can pay 10 000 $BLOOD and you have 10% chance to
                        finish with a successful mint.
                    </div>
                </div>
            </div>
        </>
    )
}

export default GambleSystem
