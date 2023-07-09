import { CTechs, type IProject } from "@src/models"

const rootImagePath = "/"
const extension = 'webp'

const getImagePathByName = (name: string) => {
    return `${rootImagePath}${name}.${extension}`
}

export const projects: IProject[] = [
    {
        title: "time manager",
        description: "App for optimize and manage your time App for optimize and manage your time",
        imageUrl: getImagePathByName("time-manager"),
        techs: [CTechs.JavaScript, CTechs.ReactRouterDom, CTechs.React],
        githubURL: "https://github.com/Jes015/Time-Manager",
        demoURL: "https://time-manager-zeta.vercel.app/",
    },
    {
        description: "App for optimize and manage your time",
        title: "nexus catalyst",
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
        description: "App for optimize and manage your time",
        imageUrl: getImagePathByName("dev-vault"),
        techs: [CTechs.Typescript, CTechs.Nextjs, CTechs.AutoAnimate],
        githubURL: "https://github.com/Jes015/Dev-Vault/",
        demoURL: "https://dev-vault-ochre.vercel.app/",
    },
    {
        title: "Example1",
        description: "App for optimize and manage your time",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        description: "App for optimize and manage your time",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        description: "App for optimize and manage your time",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        description: "App for optimize and manage your time",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        description: "App for optimize and manage your time",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        description: "App for optimize and manage your time",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        description: "App for optimize and manage your time",
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        description: "App for optimize and manage your time",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
]