import type { IImage, TImageArray } from "@src/models"

const rootImagePath = "/"
const extension = 'webp'

export const getImagesPathByName = (name: string, maxImages: number) => {
    let routes: TImageArray = []

    let tempRoute: IImage | null = null

    Array(maxImages).fill(null).map((_, index) => {
        tempRoute = { normal: `${rootImagePath}${name}-${index + 1}.${extension}`, resized: `${rootImagePath}${name}-${index + 1}-resized.${extension}`}
        routes.push(tempRoute)
    })
    
    return routes
}