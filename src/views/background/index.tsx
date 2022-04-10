import React from 'react'

import { Image } from 'components'
import { ChildrenProps } from 'types/children'

import BackgroundImage from 'assets/images/background.png'

const Background = ({ children }: ChildrenProps) => {
    return (
        <>
            <div className="relative">
                <div className="fixed min-h-screen w-screen">
                    <Image
                        src={BackgroundImage}
                        alt="Background"
                        mode="fill"
                        oFit="cover"
                    />
                </div>
                <div className="absolute h-full w-full bg-gradient-to-b from-[#061334] to-[#06133400]"></div>
                {children}
            </div>
        </>
    )
}

export default Background
