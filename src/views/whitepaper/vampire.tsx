import React from 'react'

import { vampire } from 'utils/tempdata/whitepaper/vampire'

const Vampire = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col items-center">
                <div
                    className="pt-12 pb-6 text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:pt-10 tablet:pb-4 tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Vampire
                </div>
                <div className="space-y-6 text-[16px] leading-[26px] tracking-[0.02em] tablet:space-y-4 tablet:text-[12px]">
                    <div data-aos="fade-up">
                        You will have 10% to mint a vampire. If you have a
                        vampire you will earn more $BLOOD than human and all the
                        vampire will have the same rewarding system. We can’t
                        give exact data about your daily reward as it all
                        depends on the harvest and unstake of humans.
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
                            {vampire.map((item, index) => (
                                <tr key={`vampire_${index}`}>
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
                        The vampire will have a 10% chance to kidnap your human
                        from the younger generation.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vampire
