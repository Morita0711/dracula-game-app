import React from 'react'

import { LogoTextProps } from 'types/components/logo-text'

const LogoText = ({ title, colorFlag, textAlign }: LogoTextProps) => {
    return (
        <>
            <div
                className={`cursor-pointer font-SpeedRush text-[48px] leading-[48px] tracking-[0.06em] desktop:tracking-[0.04em] mobile:tracking-[0.02em] ${textAlign} ${colorFlag}  w-full max-w-[400px] desktop:max-w-[318px] desktop:text-[40px] tablet:text-[30px] mobile:text-[28px]`}
                data-aos="fade-right"
            >
                {title}
            </div>
        </>
    )
}

export default LogoText
