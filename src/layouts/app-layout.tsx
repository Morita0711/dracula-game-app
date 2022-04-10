import React from 'react'
import { ToastContainer, Zoom, Slide, Flip, Bounce } from 'react-toastify'

import { ChildrenProps } from 'types/children'

const AppLayout = ({ children }: ChildrenProps) => {
    const kinds = [Zoom, Slide, Flip, Bounce]
    const transition = kinds[Math.floor(Math.random() * kinds.length)]

    return (
        <>
            <ToastContainer
                autoClose={8000}
                position="bottom-right"
                newestOnTop
                draggable
                closeButton={false}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                transition={transition}
            />
            {children}
        </>
    )
}

export default AppLayout
