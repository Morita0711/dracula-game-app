import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import LogoText from 'components/logo-text'
import { menudata } from 'utils/tempdata/menu'
import { LogoTextProps } from 'types/components/logo-text'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { BiMenuAltRight } from 'react-icons/bi'
import { FaRegTimesCircle } from 'react-icons/fa'

const Navbar = ({ title, colorFlag }: LogoTextProps) => {
    const router = useRouter()
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const setNavbar = () => {
        const navbar: any = document.querySelector('#navbar')
        if (document.documentElement.scrollTop === 0) {
            navbar.style.background = 'transparent'
            navbar.style.borderBottom = '0'
        } else {
            navbar.style.background = '#061334'
            navbar.style.borderBottom = '4px solid #17C1F7'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', setNavbar)
        setNavbar()
        return () => {
            window.removeEventListener('scroll', setNavbar)
        }
    }, [])

    return (
        <div className="relative z-[60] py-10">
            <div
                id="navbar"
                className="fixed left-0 top-0 z-[50] w-full py-2 transition-all duration-500"
            >
                <div className="m-auto flex w-[90%] max-w-[1530px] items-center laptop:justify-between">
                    <LogoText title={title} colorFlag={colorFlag} />
                    <div
                        className="flex items-center space-x-12 self-center pt-2 text-[18px] uppercase leading-5 tracking-wide desktop:space-x-6 desktop:text-[14px] laptop:hidden"
                        data-aos="fade-left"
                    >
                        {menudata.map((item, index) => (
                            <Link href={item.path} key={`menu_${index}`}>
                                <a
                                    className={`${
                                        router.route === item.path &&
                                        'font-extrabold text-[#17c1f6]'
                                    } animate-border relative pb-1 transition duration-150 hover:text-[#17c1f6]`}
                                >
                                    {item.title}
                                </a>
                            </Link>
                        ))}
                        <WalletMultiButton className="p-0 pb-1 font-sans text-[18px] font-normal uppercase leading-5 tracking-[0.06em] opacity-70 transition duration-150 hover:bg-transparent hover:text-[#17c1f6] hover:opacity-100 desktop:text-[14px]" />
                    </div>
                    <div
                        role="button"
                        className="hidden laptop:flex"
                        data-aos="fade-right"
                    >
                        <BiMenuAltRight
                            fontSize={30}
                            color="#17c1f6"
                            aria-label="menu"
                            onClick={() => {
                                document.body.style.overflow = 'hidden'
                                setIsMenuVisible((prev) => !prev)
                            }}
                        />
                    </div>
                </div>
            </div>
            {isMenuVisible && (
                <div className="fixed top-0 left-0 z-[9999] h-full w-full items-center justify-center bg-[#00000090] p-4 backdrop-blur scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-gray-800 desktop:hidden laptop:flex">
                    <div
                        className={`z-50 mt-20 transition-all ${
                            isMenuVisible ? 'scale-100' : 'scale-0'
                        } absolute w-[80%] desktop:hidden laptop:block`}
                    >
                        <div className="space-x-12 border-[6px] border-[#17C1F7] bg-[#0E1646] p-10 text-center text-[28px] uppercase leading-5 tracking-wide laptop:flex laptop:flex-col laptop:items-center laptop:space-x-0 laptop:space-y-8 tablet:p-6 tablet:text-[16px] mobile:space-y-4">
                            {menudata.map((item, index) => (
                                <Link
                                    href={item.path}
                                    key={`mobilemenu_${index}`}
                                >
                                    <a
                                        className={`animate-border relative pb-1  ${
                                            router.route === item.path &&
                                            'font-extrabold text-[#17c1f6]'
                                        } hover:text-[#17c1f6]`}
                                    >
                                        {item.title}
                                    </a>
                                </Link>
                            ))}
                            <WalletMultiButton className="text-center font-sans text-[28px] font-normal uppercase leading-5 tracking-[0.06em] opacity-70 transition duration-150 hover:bg-transparent hover:text-[#17c1f6] hover:opacity-100 tablet:text-[16px]" />
                        </div>
                    </div>
                    <div
                        role="button"
                        className="absolute right-[5%] top-[3%] z-[9999]"
                    >
                        <FaRegTimesCircle
                            fontSize={30}
                            color="#17c1f6"
                            aria-label="times"
                            onClick={() => {
                                document.body.style.overflow = 'auto'
                                setIsMenuVisible((prev) => !prev)
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
