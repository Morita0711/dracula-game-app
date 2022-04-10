import React from 'react'
import Head from 'next/head'

import { Container, Image, Progress } from 'components'
import {
    GambleSystem,
    Human,
    LotteryContent,
    MintingPrice,
    Navbar,
    SummaryContent,
    Supply,
    Team,
    Vampire,
    WhitepaperContent,
} from 'views'

import BackgroundImage from 'assets/images/background.png'
import AboutUs from 'views/whitepaper/aboutus'

const Whitepaper = () => {
    return (
        <>
            <Head>
                <title>Dracula Game | Whitepaper</title>
            </Head>
            <div className="relative">
                <div className="fixed min-h-screen w-screen">
                    <Image
                        src={BackgroundImage}
                        alt="Background"
                        mode="fill"
                        oFit="cover"
                    />
                    <div className="fixed h-full w-full bg-[#12101D99]"></div>
                </div>
                <Progress />
                <Container>
                    <Navbar title="Dracula Game" colorFlag="text-[#DF142C]" />
                    <div className="relative z-10 pb-16">
                        <WhitepaperContent />
                        <SummaryContent />
                        <MintingPrice />
                        <Human />
                        <Vampire />
                        <GambleSystem />
                        <LotteryContent />
                        <Supply />
                        <Team />
                        <AboutUs />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Whitepaper
