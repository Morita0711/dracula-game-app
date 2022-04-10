import React, { useState } from 'react'

import { BtnProps } from 'types/components/button'

const OutlineBtn = ({
    title,
    handleEvent = () => {},
    loadingFlag,
}: BtnProps) => {
    const [effect, setEffect] = useState(false)
    return (
        <>
            <button
                disabled={loadingFlag}
                onClick={() => {
                    handleEvent()
                    setEffect(true)
                }}
                onAnimationEnd={() => setEffect(false)}
                className={`${loadingFlag && 'cursor-wait'} ${
                    effect && 'animate-wiggle'
                } border-2 bg-[#09164550] py-[18px] text-center text-[24px] font-bold uppercase leading-[18px] tracking-wide ${
                    title === 'No NFT Available : 0' ||
                    title === 'No NFT Staked : 0'
                        ? 'border-[#DF142C] text-[#DF142C]'
                        : 'border-[#17C1F6] text-[#17C1F6]'
                } desktop:py-[14px] desktop:text-[20px] mobile:py-[10px] mobile:text-[16px]`}
            >
                {title}
            </button>
        </>
    )
}

export default OutlineBtn
