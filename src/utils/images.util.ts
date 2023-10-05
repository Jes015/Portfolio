import type { IImage, TImageArray } from "@src/models"

const getMaxImagesByProjectName = (projectName: string) => {
    const files = Object.keys(import.meta.glob('../../public/*'))
    const filesFiltered = files.filter((project) => project.includes(projectName))
    const filesCount = filesFiltered.length / 2 // <-- this /2 is because of the resized images

    return filesCount
}

export const getImagesPathByName = (name: string) => {
    const rootImagePath = "/"
    const extension = 'webp'

    let routes: TImageArray = []

    let tempRoute: IImage | null = null

    const maxImages = getMaxImagesByProjectName(name)

    Array(maxImages).fill(null).map((_, index) => {
        tempRoute = { normal: `${rootImagePath}${name}-${index + 1}.${extension}`, resized: `${rootImagePath}${name}-${index + 1}-resized.${extension}` }
        routes.push(tempRoute)
    })

    return routes
}