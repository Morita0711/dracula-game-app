import React from 'react'
//  to import type
import { TimerProps } from 'types/components/timer'

const Timer: React.FC<TimerProps> = ({ numberTimer, stringTimer }) => {
    return (
        <div className="flex flex-col place-items-center">
            <div className="w-[120px] border-[4px] border-[#17C1F7] bg-[#09164550] p-5 tablet:w-[90px] tablet:p-3">
                <p className="text-center text-[50px] tablet:text-[40px]">
                    {numberTimer}
                </p>
            </div>
            <div className="pt-[10px] text-[20px] leading-[30px] tablet:text-[18px] tablet:leading-[21px] mobile:text-[12px] mobile:leading-[14px]">
                {stringTimer}
            </div>
        </div>
    )
}

export default Timer
