import { useRef, useState } from "react"

interface IParams {
    images: string[]
}

export const useImageViewer = ({ images }: IParams) => {
    const actualImageIndex = useRef(0)
    const [actualImageSrc, setActualImage] = useState(images[actualImageIndex.current])

    const nextImage = () => {
        const isTheLastImage = actualImageIndex.current === images.length - 1
        if (isTheLastImage) return

        actualImageIndex.current += 1
        setActualImage(images[actualImageIndex.current])
    }

    const previousImage = () => {
        const isTheFirstImage = actualImageIndex.current === 0
        if(isTheFirstImage) return

        actualImageIndex.current -= 1
        setActualImage(images[actualImageIndex.current])
    }

    return { actualImageSrc, nextImage, previousImage, actualImageIndex: actualImageIndex.current + 1 }
}