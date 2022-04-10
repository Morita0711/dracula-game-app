import React, { useEffect, useState } from 'react'

import { CheckBox, Image } from 'components'

const NFTCard = ({ item, onClick, index, rewardFlag }: any) => {
    const nftLoader = ({ src, width, height }: any) => {
        return `${src}?w=${width}?h=${height}`
    }

    const [reward, setReward] = useState(0)

    useEffect(() => {
        // let timer: any
        let temp = item?.state?.rewardAmount.toNumber() || 0
        setReward(temp)

        // if (item?.state?.tickDuration) {
        //     timer = setInterval(() => {
        //         temp += item?.state?.rewardPerTick
        //         setReward(temp)
        //     }, item?.state?.tickDuration)
        // }
        // return () => {
        //     clearInterval(timer)
        // }
    }, [
        item?.state?.rewardAmount,
        // item?.state?.rewardPerTick,
        // item?.state?.tickDuration,
    ])

    return (
        <>
            <label className="card flex justify-center" key={index}>
                <input
                    className="card__input"
                    type="radio"
                    name="nft"
                    onClick={() => onClick()}
                />
                <div className="card__body ">
                    <div className="h-[120px] w-[120px] laptop:h-[140px] laptop:w-[140px]">
                        <div className="card__body-cover">
                            <Image
                                src={item.image}
                                loader={nftLoader}
                                alt={item.name}
                                width={140}
                                height={140}
                                className="card__body-cover-image"
                            />
                            <CheckBox />
                        </div>
                    </div>
                    {(rewardFlag === 3 || rewardFlag === 4) && (
                        <header className=" rounded-full bg-white pb-1 text-center font-bold text-[red]">
                            <div className="p-1 text-[20px]">
                                {rewardFlag === 3 && reward.toFixed(0)}
                                {rewardFlag === 4 &&
                                    item?.state?.rewardAmount.toNumber()}
                                <span className="p-1 text-[8px]">$BLOOD</span>
                            </div>
                        </header>
                    )}
                </div>
            </label>
        </>
    )
}

export default NFTCard
