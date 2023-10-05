import type { TImageArray } from "@src/models"
import { useState } from "react"

interface IParams {
    images: TImageArray
}

export const useImageViewer = ({ images }: IParams) => {
    const [actualImageIndex, setActualImageIndex] = useState(0)

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

    const setImageByIndex = (index: number) => {
        setActualImageIndex(index)
    }

    return { nextImage, previousImage, actualImageIndex, setImageByIndex }
}