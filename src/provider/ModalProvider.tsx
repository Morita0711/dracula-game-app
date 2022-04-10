import { createContext, useContext, useMemo, useState } from 'react'

import { ChildrenProps } from 'types/children'

//  Create context
const ModalContext = createContext({})

const ModalProvider = ({ children }: ChildrenProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [haveModalText, setHaveModalText] = useState({
        title: '',
        type: '',
    })

    const visible = useMemo(
        () => ({ isVisible, setIsVisible }),
        [isVisible, setIsVisible]
    )

    const modalText = useMemo(
        () => ({ haveModalText, setHaveModalText }),
        [haveModalText, setHaveModalText]
    )
    return (
        <>
            <ModalContext.Provider value={{ visible, modalText }}>
                {children}
            </ModalContext.Provider>
        </>
    )
}

//  Use context
export const useModalText = () => {
    return useContext<any>(ModalContext)
}

export default ModalProvider
