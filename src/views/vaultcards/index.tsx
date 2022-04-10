import React from 'react'

import { LogoText, VaultCard } from 'components'

import BloodPool from 'assets/images/blood_pool.png'
import SolPool from 'assets/images/sol_pool.png'
import { ComingSoon } from 'views'

const VaultCards = () => {
    return (
        <>
            {/* <div className="relative z-10 flex flex-col items-center pb-10">
                <div className="pt-6 pb-14 tablet:pt-4 tablet:pb-6">
                <LogoText title="Vault" colorFlag="text-[#17C1F6]" />
                </div>
                <div className="flex w-full justify-center space-x-[30px] pb-8 laptop:flex-col laptop:items-center laptop:space-x-0 laptop:space-y-[30px]">
                    <VaultCard
                        type="Blood"
                        src={BloodPool}
                        alt="Blood Pool"
                        earned={0.0}
                        ARPValue={129.12}
                        yourstake={0.0}
                        totalstake={7760427.56}
                    />
                    <VaultCard
                        type="Sol"
                        src={SolPool}
                        alt="Sol Pool"
                        earned={0.0}
                        ARPValue={468.12}
                        yourstake={0.0}
                        totalstake={7760427.56}
                    />
                </div>
            </div> */}
            <ComingSoon />
        </>
    )
}

export default VaultCards
