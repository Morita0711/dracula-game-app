import React from 'react'
import Head from 'next/head'

import { Container, Modal } from 'components'
import { LotteryCards, Navbar, Background } from 'views'
import { useModalText } from 'provider/ModalProvider'

const Staking = () => {
    const {
        visible: { isVisible },
        modalText: { haveModalText },
    } = useModalText()

    isVisible && (document.body.style.overflow = 'hidden')
    return (
        <>
            <Head>
                <title>Dracula Game | Lottery</title>
            </Head>
            <Background>
                <Container>
                    <Navbar title="Lottery" colorFlag="text-[#17C1F6]" />
                    <LotteryCards pageFlag="lottery" />
                    {isVisible && (
                        <Modal
                            title={haveModalText.title}
                            type={haveModalText.type}
                            modalFlag={haveModalText.modalFlag}
                            pageFlag={haveModalText.pageFlag}
                            handleEvent={haveModalText.handleEvent}
                        />
                    )}
                </Container>
            </Background>
        </>
    )
}

export default Staking
