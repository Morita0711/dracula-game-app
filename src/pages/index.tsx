import Head from 'next/head'

import { Container } from 'components'
import { Background, LandingCards, Navbar } from 'views'

export default function Home() {
    return (
        <>
            <Head>
                <title>Dracula Game</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Background>
                <Container>
                    <Navbar title="Dracula Game" colorFlag="text-[#DF142C]" />
                    <LandingCards />
                </Container>
            </Background>
        </>
    )
}
