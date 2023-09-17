interface IProject {
    title: string
    description: string
    imageUrls: IImage[]
    techs: string[]
    githubURL: string
    demoURL: string
}

interface IImage {
    normal: string
    resized: string
}

export type TImageArray = IImage[]

export type { IImage, IProject }

