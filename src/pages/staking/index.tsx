import React, { useContext } from 'react'
import Head from 'next/head'

import { Container, Modal } from 'components'
import { StakingCards, Navbar, Background } from 'views'
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
                <title>Dracula Game | Staking</title>
            </Head>
            <Background>
                <Container>
                    <Navbar title="Staking" colorFlag="text-[#17C1F6]" />
                    <StakingCards />
                    {isVisible && (
                        <Modal
                            title={haveModalText.title}
                            type={haveModalText.type}
                            modalFlag={haveModalText.modalFlag}
                            pageFlag={haveModalText.pageFlag}
                            kind={haveModalText.kind}
                            taxFee={haveModalText.taxFee}
                            lossChance={haveModalText.lossChance}
                            minUnstakeAmount={haveModalText.minUnstakeAmount}
                            handleEvent={haveModalText.handleEvent}
                        />
                    )}
                </Container>
            </Background>
        </>
    )
}

export default Staking
