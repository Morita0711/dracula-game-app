import React, { useState } from 'react'

import { BtnProps } from 'types/components/button'

const NormalBtn = ({
    title,
    handleEvent = () => {},
    loadingFlag,
}: BtnProps) => {
    return (
        <>
            <button
                disabled={loadingFlag}
                onClick={() => {
                    handleEvent()
                }}
                className={`${
                    loadingFlag && 'cursor-not-allowed'
                } action-button relative overflow-hidden bg-[#1795f6] py-[18px] text-center text-[24px] uppercase leading-[18px] tracking-wide transition duration-300 hover:opacity-80 desktop:py-[14px] desktop:text-[20px] mobile:py-[10px] mobile:text-[16px]`}
            >
                {title}
            </button>
        </>
    )
}

export default NormalBtn
