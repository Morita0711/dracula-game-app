import React from 'react'
import Head from 'next/head'

import { Container } from 'components'
import { Background, Navbar, VaultCards } from 'views'

const Vault = () => {
    return (
        <>
            <Head>
                <title>Dracula Game | Vault</title>
            </Head>
            <Background>
                <Container>
                    <Navbar title="Vault" colorFlag="text-[#17C1F6]" />
                    <VaultCards />
                </Container>
            </Background>
        </>
    )
}

export default Vault
