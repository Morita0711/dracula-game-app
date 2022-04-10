import React from 'react'

import { LabelProps } from 'types/components/label'

const Label = ({ title, content }: LabelProps) => {
    return (
        <>
            <div className="max-w-[450px] text-[18px] leading-[28px] tracking-[0.02em] desktop:text-[16px] ">
                <span className="text-[#17C1F6]">{title}</span>
                <span>{content}</span>
            </div>
        </>
    )
}

export default Label
