import React from 'react'
// to import from next
import Image from 'next/image'
// to import type
import { ImageProps, ImagePlaceholderProps } from 'types/components/Image'
// to import util
import { isEmpty } from 'utils/validation'

const ImageComponent: React.FC<ImageProps> = ({
    src = '',
    alt = 'No Image, Please reload.',
    width = 0,
    height = 0,
    mode = 'intrinsic',
    oFit = 'fill',
    quality = 75,
    priority = false,
    loadOption,
    oPosition = 'initial',
    ...props
}) => {
    if (isEmpty(src)) {
        return (
            <div
                className="flex items-center justify-center"
                style={{ width: width, height: height }}
            ></div>
        )
    }
    const blurUrl = (typeof src === 'object' ? src.src : src) + '?q=10'
    const blurProperty: ImagePlaceholderProps =
        width < 40 || height < 40
            ? {}
            : { placeholder: 'blur', blurDataURL: blurUrl }
    return mode === 'fill' ? (
        <div className="absolute top-0 bottom-0 h-full w-full" {...props}>
            <div className="relative h-full w-full">
                <Image
                    src={src}
                    layout={mode}
                    alt={alt}
                    objectFit={oFit}
                    quality={quality}
                    loading={loadOption}
                    priority={priority}
                    objectPosition={oPosition}
                    {...blurProperty}
                />
            </div>
        </div>
    ) : (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout={mode}
            objectFit={oFit}
            quality={quality}
            loading={loadOption}
            priority={priority}
            objectPosition={oPosition}
            {...blurProperty}
            {...props}
        />
    )
}
export default ImageComponent
