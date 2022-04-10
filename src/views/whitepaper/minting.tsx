import React from 'react'

import { pricedata } from 'utils/tempdata/whitepaper/pricedata'

const MintingPrice = () => {
    return (
        <>
            <div className="m-auto flex max-w-[750px] flex-col items-center">
                <div
                    className="pt-12 pb-6 text-[26px] font-bold uppercase leading-[34px] tracking-[0.02em] tablet:pb-4 tablet:pt-10 tablet:text-[20px]"
                    data-aos="fade-up"
                >
                    Minting Price
                </div>
                <div className="text-[16px] leading-[26px] tracking-[0.02em] tablet:text-[12px]">
                    <table
                        className="w-full table-fixed border-collapse border border-white"
                        data-aos="fade-up"
                    >
                        <thead>
                            <tr>
                                <th className="border-collapse border border-slate-300 p-[10px]">
                                    Generation
                                </th>
                                <th className="border-collapse border border-slate-300">
                                    Mint price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricedata.map((item, index) => (
                                <tr key={`price_${index}`}>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.generation}
                                    </td>
                                    <td className="border-collapse border border-slate-300 py-[10px] px-[14px] tablet:px-2">
                                        {item.mintprice}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MintingPrice
