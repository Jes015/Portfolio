import { CTechs, type IProject } from "@src/models"

const rootImagePath = "/"
const extension = 'webp'

const getImagePathByName = (name: string) => {
    return `${rootImagePath}${name}.${extension}`
}

export const projects: IProject[] = [
    {
        title: "CulinaryAlchemy",
        description: "Online platform that aims to revolutionize the way people discover, share, and explore recipes.",
        imageUrl: getImagePathByName('culinary-alchemy'),
        techs: [CTechs.React, CTechs.Astro, CTechs.cypress, CTechs.axios, CTechs.Typescript, CTechs.Zod, CTechs.joyUI, CTechs.ReactHookForm],
        githubURL: "https://github.com/CulinaryAlchemy/CulinaryAlchemy",
        demoURL: "https://culinary-alchemy-web-app.vercel.app/",
    },
    {
        title: "time manager",
        description: "App for optimize and manage your time App for optimize and manage your time.",
        imageUrl: getImagePathByName("time-manager"),
        techs: [CTechs.JavaScript, CTechs.ReactRouterDom, CTechs.React],
        githubURL: "https://github.com/Jes015/Time-Manager",
        demoURL: "https://time-manager-zeta.vercel.app/",
    },
    {
        title: "nexus catalyst",
        description: "Dashboard for web developers to optimize and manage their time",
        imageUrl: getImagePathByName("dashboard-for-developers"),
        techs: [
            CTechs.Typescript,
            CTechs.React,
            CTechs.Firebase,
            CTechs.ReactRouterDom,
            CTechs.Sooner,
            "react winbox",
        ],
        githubURL: "https://github.com/Jes015/NexusCatalyst",
        demoURL: "https://nexus-catalyst.vercel.app/",
    },
    {
        title: "dev vault",
        description: "List of tools for web developers",
        imageUrl: getImagePathByName("dev-vault"),
        techs: [CTechs.Typescript, CTechs.Nextjs, CTechs.AutoAnimate, CTechs.jsonBin],
        githubURL: "https://github.com/Jes015/Dev-Vault/",
        demoURL: "https://dev-vault-ochre.vercel.app/",
    }
]