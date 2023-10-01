import type { TTechsArray } from "@src/models"

export interface IProject {
    title: string
    description: string
    imageUrls: IImage[]
    techs: TTechsArray
    githubURL: string
    demoURL: string
}

export interface IImage {
    normal: string
    resized: string
}

export type TImageArray = IImage[]
export type TProjectArray = IProject[]
