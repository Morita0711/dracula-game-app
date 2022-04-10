import React, { useState } from 'react'
import Link from 'next/link'

import { Image } from 'components'
import { VaultCardsProps } from 'types/views/vaultcard'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { FiChevronDown, FiChevronUp, FiUsers } from 'react-icons/fi'

const VaultCard = ({
    type,
    src,
    alt,
    earned,
    ARPValue,
    yourstake,
    totalstake,
}: VaultCardsProps) => {
    const [visibleDetails, setVisibleDetails] = useState(false)
    return (
        <>
            <div className="w-full max-w-[620px] border-[6px] border-[#17C1F7] bg-[#09164550] p-12 uppercase desktop:p-8 laptop:p-6 tablet:border-4">
                <div className="pb-6 text-[48px] font-bold leading-[48px] tracking-[0.04em] desktop:text-[40px] laptop:pb-4 laptop:text-[30px] tablet:text-[26px]">
                    {type} Pool
                </div>
                <Image src={src} alt={alt} width={84} height={84} />
                <div className="flex flex-col items-center pt-6 laptop:pt-4">
                    <div className="self-start text-[48px] font-bold leading-[48px] tracking-[0.04em] desktop:text-[40px] laptop:text-[30px] tablet:text-[26px]">
                        {earned?.toFixed(9)}
                    </div>
                    <div className="self-start pt-4 text-[16px] leading-[21px] tracking-[0.02em] laptop:pt-2 tablet:text-[14px]">
                        {type} Earned
                    </div>
                    <WalletMultiButton className="mt-12 bg-[#17C1F6] py-5 px-10 text-center text-[24px] font-bold uppercase leading-[18px] tracking-[0.02em] transition duration-300 hover:rotate-2 desktop:mt-8 desktop:py-4 desktop:px-6 desktop:text-[20px] tablet:py-3 tablet:px-4 tablet:text-[14px]" />
                </div>
                <div className="space-y-6 pt-12 desktop:space-y-4 desktop:pt-8">
                    <div className="flex justify-between">
                        <div>ARP:</div>
                        <div>{ARPValue?.toLocaleString()}%</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Your Stake:</div>
                        <div>{yourstake?.toFixed(4)}</div>
                    </div>
                    <div className="border-2 border-[#17C1F6] tablet:border"></div>
                </div>
                <div className="pt-12 desktop:pt-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 rounded-[100px] border py-[10px] px-[20px] tablet:py-1 tablet:px-2">
                            <FiUsers fontSize={16} />
                            <span className="text-[16px] leading-[21px] tracking-[0.02em] tablet:text-[12px]">
                                Community
                            </span>
                        </div>
                        <div
                            role="button"
                            className="flex space-x-2"
                            onClick={() => setVisibleDetails(!visibleDetails)}
                        >
                            {!visibleDetails ? (
                                <>
                                    <span className="text-[16px] leading-[21px] tracking-[0.02em] tablet:text-[12px]">
                                        Details
                                    </span>
                                    <FiChevronDown fontSize={20} />
                                </>
                            ) : (
                                <>
                                    <span className="text-[16px] leading-[21px] tracking-[0.02em] tablet:text-[12px]">
                                        Hide
                                    </span>
                                    <FiChevronUp fontSize={24} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={`space-y-6 pt-8 transition-all duration-500 ${
                        !visibleDetails
                            ? 'h-0 scale-y-0'
                            : 'h-[150px] scale-y-100'
                    }`}
                >
                    <div className="flex justify-between">
                        <div>Total Staked:</div>
                        <div>{totalstake?.toFixed(3).toLocaleString()}</div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Link href="#">
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="capitalize text-[#17C1F6] underline"
                            >
                                View project site
                            </a>
                        </Link>
                        <Link href="#">
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="capitalize text-[#17C1F6] underline"
                            >
                                View contact
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VaultCard
