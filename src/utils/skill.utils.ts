import type { ISkill, TExperiencesArray, TProjectArray, TSkillArray, TTechsArray } from "@src/models"

export const genereSkills = (techs: TTechsArray, projects: TProjectArray, experiences: TExperiencesArray): TSkillArray => {    
    const newSkills = techs.map((tech) => {
        const projectsFound = projects.filter((project) => project.techs.some((tempProject) => tempProject.name === tech.name))

        const experiencesFound = experiences.filter((experience) => experience.techs.some((tempTech) => tempTech.name === tech.name))

        const newSkill: ISkill = {
            name: tech.name,
            projects: projectsFound,
            experience: experiencesFound.length != 0 ? experiencesFound.map((exp) => exp.company).join(' ') : 'none',
            Icon: tech.Icon
        }

        return newSkill
    })

    const newSkillsSorted = [...newSkills].sort((a, b) => b.projects.length - a.projects.length)
    return newSkillsSorted
}