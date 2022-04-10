import React, { useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Progress = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('progress', {
            value: 100,
            ease: 'none',

            scrollTrigger: {
                trigger: 'body',
                scrub: 0.3,
                markers: false,
                start: 'top top',
                end: 'bottom bottom',
            },
        })
    }, [])

    return (
        <>
            <progress max="100" value="0"></progress>
        </>
    )
}

export default Progress
