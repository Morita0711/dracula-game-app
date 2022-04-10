import React from 'react'
import Link from 'next/link'

const WhitepaperContent = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col items-center">
                <div
                    className="pt-16 pb-6 text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:pb-4 tablet:pt-10 tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Whitepaper
                </div>
                <div className="space-y-5 text-[16px] leading-[26px] tracking-[0.02em] tablet:space-y-3 tablet:text-[12px]">
                    <div data-aos="fade-up">
                        For centuries they have lived among us, remained hidden
                        in the human world...until now. The blood hunt is on and
                        this is a Dracula’s game.
                    </div>
                    <div data-aos="fade-up">
                        It‘s the year 1981, an epidemic outbreak caused by a
                        deadly virus has spread, taking over the world with
                        darkness of bat-like degenerates roaming the night. With
                        a massive blood shortage and the fear of wiping out the
                        human race completely, an underground group of botched
                        scientists have planned to harvest humans to stake for
                        vampires to continue their strict diet of $BLOOD. These
                        vampires must feed! Eternal human bloodlust is their
                        greatest weakness and they have striked a deal for blood
                        to blood transfusions. As the thirst accelerates, the
                        demand for humans to stake blood has become a highly
                        profitable black market.
                    </div>
                    <div data-aos="fade-up">
                        With the very first Metaverse blood trade, humans have
                        the condition to stake their blood at the lab. Here
                        vampires can sink their teeth into a human, feed and
                        drain while attached to a tube for blood transfusions.
                        As The Bloodsucking Elites derive from their human
                        utility, vampires would simply not exist without
                        managing their resources.
                    </div>
                    <div data-aos="fade-up">
                        Bound and hung, the stake-weilding humans can stay alive
                        in an authorized deal from a feeding vampire for $BLOOD
                        earnings. While you are facing the mounting blood-thirst
                        of a night creature after all, unstake from your tube
                        and the insatiable vampire will try to steal all your
                        accumulated $BLOOD! But of course, there have been a few
                        riots outside the lab. Far-right vampires who are
                        pro-humans are willing to fight for human freedom. And
                        for those who escape, will feel the wrath of protestors
                        with signs that say “thrill of the hunt” and “free
                        food!” - a small tax you pay for leaving the system.
                    </div>
                    <div data-aos="fade-up">
                        As the blood lab is now the largest supplier of human
                        blood drives, it’s now revealed that these vampires are
                        willing to pay the extra price for the real thing.
                        $BLOOD is worth exorbitant prices, a breeding is in
                        place to clone and as with new humans, it’s only
                        primitive that they try to kidnap it’s fresh meat. These
                        vampires will glide about on batwings tracking down the
                        tastiest prey, it’s a stockpile and harvest-for-yourself
                        fight and only the most cunning vamp will be greedy
                        enough.
                    </div>
                    <div data-aos="fade-up">
                        With so much at stake, will this human-vampire ecosystem
                        stabilize in time? Will vampires become greedy or will
                        humans have the chance to re-populate?
                    </div>
                    <div data-aos="fade-up">
                        Will you play{' '}
                        <Link href="/staking">
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="font-bold text-[#1d49d8] underline"
                            >
                                human
                            </a>
                        </Link>{' '}
                        or will you play{' '}
                        <Link href="/staking">
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="font-bold text-[#DF142C] underline"
                            >
                                vampire
                            </a>
                        </Link>{' '}
                        ? All we know for sure is humans are a vampires worst
                        enemy, and their food.
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhitepaperContent
