import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

import { LogoText } from 'components'

const LandingCards = () => {
    return (
        <>
            <div className="relative z-10 flex flex-col items-center pb-32 mobile:pb-16">
                <div className="pt-6 pb-9 tablet:pt-4 tablet:pb-6">
                    <LogoText title="Dracula Game" colorFlag="text-[#DF142C]" />
                </div>
                <div className="flex flex-col items-center border-[15px] border-[#344FA4] bg-[#12101D80] px-40 pt-12 pb-14 desktop:border-[10px] laptop:px-20 tablet:border-[8px] tablet:px-6 tablet:pb-8 tablet:pt-8 mobile:border-4 mobile:p-4">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        width={490}
                        height={296}
                        data-aos="zoom-in"
                    >
                        <source src="videos/dracula.mp4" type="video/mp4" />
                    </video>
                    <button
                        className="whitepaper-btn mt-10"
                        data-aos="fade-up"
                        onClick={() => Router.push('/whitepaper')}
                    >
                        White Paper
                        <span className="whitepaper-btn__inner">
                            <span className="whitepaper-btn__whitepapers">
                                <span className="whitepaper-btn__whitepaper"></span>
                                <span className="whitepaper-btn__whitepaper"></span>
                                <span className="whitepaper-btn__whitepaper"></span>
                                <span className="whitepaper-btn__whitepaper"></span>
                            </span>
                        </span>
                    </button>
                    <div className="mt-4 flex flex-col items-center laptop:mt-8">
                        <div
                            className="text-[26px] font-semibold leading-[34px] tracking-[0.02em] laptop:text-[20px] mobile:text-[16px]"
                            data-aos="fade-up"
                        >
                            Welcome to The Dracula Game
                        </div>
                        <div className="flex flex-col items-center space-y-5 pt-6 text-center text-[18px] leading-6 tracking-[0.02em] laptop:space-y-3 laptop:text-[16px] tablet:space-y-1 tablet:pt-2 mobile:text-[12px]">
                            <div className="max-w-[682px]" data-aos="fade-up">
                                The dark underworld has dawned upon us with
                                bloodthirsty creatures and mortals to co-exist.
                            </div>
                            <div className="max-w-[530px]" data-aos="fade-up">
                                As humans and vampires both desperately try to
                                survive at ALL COSTS, a profitable black market
                                has begun in a fight for power.
                            </div>
                            <div className="max-w-[510px]" data-aos="fade-up">
                                It’s life or death for humans and vampires with
                                everything at STAKE, a FLESH and BLOOD race to
                                beat the threat and repopulate the earth.
                            </div>
                            <div className="max-w-[520px]" data-aos="fade-up">
                                Will you be part of the fierce minority
                                <br />
                                or
                                <br />
                                the powerful majority with the only motto:
                                “strength in numbers.”
                            </div>
                            <div
                                className="max-w-[520px] text-[26px] leading-[34px] laptop:text-[20px] tablet:text-[16px] mobile:text-[12px]"
                                data-aos="fade-up"
                            >
                                Will you play{' '}
                                <Link href="/staking">
                                    <a
                                        href="/staking"
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="text-[#1d49d8] underline"
                                    >
                                        human
                                    </a>
                                </Link>{' '}
                                or will you play
                                <Link href="/staking">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="text-[#DF142C] underline"
                                    >
                                        vampire
                                    </a>
                                </Link>{' '}
                                ?
                            </div>
                            <div data-aos="fade-up">Only time will tell…</div>
                        </div>
                    </div>
                    <div
                        role="button"
                        onClick={() => Router.push('staking')}
                        className="joingame-button mt-8 overflow-hidden rounded-full bg-[#DF142C] px-12 py-5 font-bold uppercase hover:opacity-80 laptop:py-3 laptop:px-8 tablet:py-2 tablet:px-6 tablet:text-[14px]"
                        data-aos="fade-up"
                    >
                        Enter The Game
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingCards
