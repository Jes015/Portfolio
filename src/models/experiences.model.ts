import type { TTechsArray } from "."

interface IExperience {
    profesion: string
    startDate: string
    endDate: string
    description: string
    company: string
    companyURL: string
    techs: TTechsArray
}

export type TExperiencesArray = IExperience[]


export type { IExperience }
