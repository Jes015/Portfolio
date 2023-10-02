import type { TImageArray } from "@src/models"
import { useEffect, useState } from "react"

interface IParams {
    images: TImageArray
}

export const useImageViewer = ({ images }: IParams) => {
    const [actualImageIndex, setActualImageIndex] = useState(0)

    useEffect(() => {
        const $imageElement = document.getElementById(String(actualImageIndex))
        $imageElement?.scrollIntoView({ behavior: 'instant' })
    }, [actualImageIndex])

    const nextImage = () => {
        const isTheLastImage = actualImageIndex === images.length - 1
        if (isTheLastImage) return
        setActualImageIndex(actualImageIndex + 1)
    }

    const previousImage = () => {
        const isTheFirstImage = actualImageIndex === 0
        if (isTheFirstImage) return
        setActualImageIndex(actualImageIndex - 1)
    }

    return { nextImage, previousImage, indexForUser: actualImageIndex + 1 }
}