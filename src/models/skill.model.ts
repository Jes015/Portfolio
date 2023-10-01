import type { TIcon, TProjectArray } from "@src/models"

export interface ISkill {
    name: string
    projects: TProjectArray
    Icon: TIcon
    experience: string
}

export type TSkillArray = ISkill[]