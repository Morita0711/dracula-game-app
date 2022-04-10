import React from 'react'

import { humandata1 } from 'utils/tempdata/whitepaper/humandata1'
import { humandata2 } from 'utils/tempdata/whitepaper/humandata2'

const Human = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col items-center">
                <div
                    className="pt-12 pb-6 text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:pt-10 tablet:pb-4 tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Human
                </div>
                <div className="space-y-6 text-[16px] leading-[26px] tracking-[0.02em] tablet:space-y-4 tablet:text-[12px] tablet:leading-4">
                    <div data-aos="fade-up">
                        You have a 90% chance to mint a human. Your daily reward
                        will depend on which group of blood your human is. Each
                        group of blood has an advantage.
                    </div>

                    <table
                        className="w-full table-fixed border-collapse border border-white"
                        data-aos="fade-up"
                    >
                        <thead>
                            <tr>
                                <th className="border-collapse border border-slate-300 p-[10px] tablet:p-2">
                                    Gen 0 (daily)
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Staking reward
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Harvest Tax
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Staking time
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Unstaking Risk
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Earnings after taxes
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {humandata1.map((item, index) => (
                                <tr key={`human2_${index}`}>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.gen}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.stakingreward}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.harvesttax}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.stakingtime}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.unstakingrisk}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.earning}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div data-aos="fade-up">
                        During the game, here is the action you will have to do
                        to earn your will. You have some conditions to respect
                        if you want to keep your $BLOOD.
                    </div>
                    <table
                        className="w-full table-fixed border-collapse border border-white"
                        data-aos="fade-up"
                    >
                        <thead>
                            <tr>
                                <th className="border-collapse border border-slate-300 p-[10px]">
                                    Action
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Notes
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Risk
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {humandata2.map((item, index) => (
                                <tr key={`human1_${index}`}>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.action}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.notes}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.risk}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div data-aos="fade-up">
                        For the next generation the reward will be the same but
                        some conditions about the harvest, staking time and
                        unstaking may differ and you will be informed about it
                        before the release.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Human
