import type { TImageArray } from "@src/models"

export interface ISong {
    title: string
    description: string
    image: TImageArray
    audio: string
    author: string
    startAt: number
    createdOn: number
}

export type TSongsArray = ISong[]