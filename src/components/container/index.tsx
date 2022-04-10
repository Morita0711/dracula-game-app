import React from 'react'

import { ChildrenProps } from 'types/children'

const Container = ({ children }: ChildrenProps) => {
    return (
        <>
            <div className="m-auto w-[90%] max-w-[1530px]">{children}</div>
        </>
    )
}

export default Container
