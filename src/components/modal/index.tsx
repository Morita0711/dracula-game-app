import React, { useEffect, useState } from 'react'

import { NormalBtn, OutlineBtn } from 'components'
import { useModalText } from 'provider/ModalProvider'
import { ModalProps } from 'types/components/modal'

const Modal = ({
    title,
    type,
    modalFlag,
    pageFlag,
    kind: kind,
    taxFee: taxFee,
    lossChance: lossChance,
    minUnstakeAmount: minUnstakeAmount,
    handleEvent = () => {},
}: ModalProps) => {
    // contexts
    const {
        visible: { setIsVisible },
    } = useModalText()

    // hooks
    const [correctKind, setCorrectKind] = useState('')
    const [hasWarning, setHasWarning] = useState(false)
    const [messageHeader, setMessageHeader] = useState('')
    const [messageWarning, setMessageWarning] = useState('')

    useEffect(() => {
        switch (kind) {
            case 0:
                setCorrectKind('Vampire')
                break
            case 1:
                setCorrectKind('O')
                break
            case 2:
                setCorrectKind('A')
                break
            case 3:
                setCorrectKind('B')
                break
        }
    }, [kind])

    useEffect(() => {
        const nonftavaialbe = `You need to select 1 nft available to ${type} it`
        const nonftstaked = `You need to select a NFT already Staked for ${type}`

        const stakeheader = `Are you sure to stake your ${title}?`
        const stakehumanwarning = `Your nft will have to stay for a certain  of days in the lab in order to produce blood<br /><br />Human O: 6 days <br />Human A: 4 days <br />Human B: 2 days <br /><br />Once your NFT is staked you will begin to earn $BLOOD `
        const stakevampirewarning = `Your nft will have to stay for 2 days around the lab in order to bite humans<br /><br />Once your NFT is staked you will begin to earn $BLOOD`

        const stakeheaderforlottery = `Are you sure you want to enter into the lottery and win big or nothing?`
        const stakewarningforlottery = `Your NFT will be locked during duration of the lottery`

        const unstakeheader = `Are you sure to unstake your ${title}?`
        const unstakehumanwarning = `You need to have at least ${minUnstakeAmount} $BLOOD to unstake <br /> <br /> By unstaking your human you take the risk to get bitten by a vampire and lose all your earning in $BLOOD<br /><br />With your Human ${correctKind}: ${lossChance}% chance to loose all your blood`
        const unstakevampirewarning = `You need to have at least ${minUnstakeAmount} $BLOOD to unstake <br /> <br /> By unstaking your vampire you take ${lossChance}% risk to be attacked by a human and lose all your earning in $BLOOD`

        const harvestheader = `Are you sure you want to harvest your ${title}?`
        const harvestwarning = `Harvest less than 10K $BLOOD = 33% Risk to lose it all. <br /> <br />If you select yes you will pay ${taxFee}% Taxes to the vampires on your earning in $BLOOD`

        const gambleheader = `Are you sure you want to gamble with your ${title} and play double or nothing`
        const gamblewarning = `If you select yes you will gamble in order to double but you will also take the risk to lose it all<br/><br/>* You have 40% chance to win. If you loose all your blood will be burnt *`

        const claimheader = `Are you sure you want to claim now? Check the threshold below before to confirm?`
        const claimwarning = `Below 50K $BLOOD = 25% more taxes <br /> Above > 250K = 5% extra $BLOOD <br /> Above > 500K = 15% extra $BLOOD`

        if (type === 'claim') {
            setMessageHeader(claimheader)
            setMessageWarning(claimwarning)
        } else if (title === 'human') {
            if (type === 'stake') {
                if (modalFlag === 1) {
                    if (pageFlag === 'lottery') {
                        setMessageHeader(stakeheaderforlottery)
                        setMessageWarning(stakewarningforlottery)
                    } else {
                        setMessageHeader(stakeheader)
                        setMessageWarning(stakehumanwarning)
                    }
                } else {
                    setMessageHeader('')
                    setMessageWarning(nonftavaialbe)
                    setHasWarning(true)
                }
            } else if (modalFlag === 3) {
                if (type === 'unstake') {
                    setMessageHeader(unstakeheader)
                    setMessageWarning(unstakehumanwarning)
                } else if (type === 'gamble') {
                    setMessageHeader(gambleheader)
                    setMessageWarning(gamblewarning)
                } else if (type === 'harvest') {
                    setMessageHeader(harvestheader)
                    setMessageWarning(harvestwarning)
                }
            } else {
                setMessageHeader('')
                setMessageWarning(nonftstaked)
                setHasWarning(true)
            }
        } else {
            if (type === 'stake') {
                if (modalFlag === 2) {
                    if (pageFlag === 'lottery') {
                        setMessageHeader(stakeheaderforlottery)
                        setMessageWarning(stakewarningforlottery)
                    } else {
                        setMessageHeader(stakeheader)
                        setMessageWarning(stakevampirewarning)
                    }
                } else {
                    setMessageHeader('')
                    setMessageWarning(nonftavaialbe)
                    setHasWarning(true)
                }
            }
            if (type === 'stake') {
            } else if (modalFlag === 4) {
                if (type === 'unstake') {
                    setMessageHeader(unstakeheader)
                    setMessageWarning(unstakevampirewarning)
                } else if (type === 'gamble') {
                    setMessageHeader(gambleheader)
                    setMessageWarning(gamblewarning)
                } else if (type === 'harvest') {
                    setMessageHeader(harvestheader)
                    setMessageWarning(harvestwarning)
                }
            } else {
                setMessageHeader('')
                setMessageWarning(nonftstaked)
                setHasWarning(true)
            }
        }
    }, [
        title,
        type,
        modalFlag,
        pageFlag,
        lossChance,
        minUnstakeAmount,
        taxFee,
        correctKind,
    ])

    //  functions
    const handleCloseModalEvent = () => {
        setIsVisible(false)
        document.body.style.overflow = 'auto'
    }

    const handleActionEvent = () => {
        if (type === 'claim') {
            handleEvent()
            handleCloseModalEvent()
        } else if (title === 'human') {
            if (type === 'stake') {
                if (modalFlag === 1) {
                    handleEvent()
                    handleCloseModalEvent()
                } else {
                    handleCloseModalEvent()
                }
            }
            if (modalFlag === 3) {
                handleEvent()
                handleCloseModalEvent()
            } else {
                handleCloseModalEvent()
            }
        } else if (title === 'vampire') {
            if (type === 'stake') {
                if (modalFlag === 2) {
                    handleEvent()
                    handleCloseModalEvent()
                } else {
                    handleCloseModalEvent()
                }
            }
            if (modalFlag === 4) {
                handleEvent()
                handleCloseModalEvent()
            } else {
                handleCloseModalEvent()
            }
        }
    }

    return (
        <>
            <div className="fixed top-0 left-0 z-[9999] flex h-full w-full items-center justify-center bg-[#00000090] p-4 backdrop-blur">
                <div className="flex max-h-[94vh] w-full max-w-[500px] flex-col overflow-y-auto border-[6px] border-[#17C1F7] bg-[#0E1646] px-[50px] py-[60px] scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-gray-800 tablet:border-4 tablet:px-[30px]">
                    <div className="flex flex-col items-center font-bold uppercase">
                        <div className="max-w-[409px] text-center text-[24px] leading-8 tracking-[0.04em] text-[#17C1F6] tablet:text-[18px]">
                            {messageHeader}
                        </div>
                        <div className="flex max-w-[409px] flex-col text-center text-[18px] leading-6 tracking-[0.04em] text-[#DF142C] tablet:text-[14px]">
                            <div className="pt-8 pb-6">Warning</div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: messageWarning,
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className={`grid ${
                            hasWarning ? 'grid-cols-3' : 'grid-cols-2'
                        } gap-3 pt-[60px] desktop:pt-10 tablet:pt-6`}
                    >
                        {!hasWarning ? (
                            <NormalBtn
                                title="yes"
                                handleEvent={() => {
                                    handleActionEvent()
                                }}
                            />
                        ) : (
                            <div></div>
                        )}
                        <OutlineBtn
                            title={`${hasWarning ? 'ok' : 'no'}`}
                            handleEvent={() => {
                                handleCloseModalEvent()
                            }}
                        />
                        {hasWarning && <div></div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
