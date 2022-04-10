import React from 'react'

import { LogoText } from 'components'

const ComingSoon = () => {
    return (
        <>
            <div className="relative z-10 flex h-[80vh] items-center justify-center pb-10">
                <LogoText
                    title="Coming Soon !"
                    colorFlag="text-[#17C1F6]"
                    textAlign="text-center"
                />
            </div>
        </>
    )
}

export default ComingSoon
