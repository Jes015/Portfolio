import { CExperiences } from "@src/data/experiences.data"
import { CProjects } from "@src/data/projects.data"
import { CTechs, type TSkillArray } from "@src/models"
import { genereSkills } from '@src/utils'

export const CSkills: TSkillArray =  genereSkills(Object.values(CTechs), CProjects, CExperiences)
