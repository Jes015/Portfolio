import { CTechs, type IProject } from "@src/models"

const rootImagePath = "../assets/"
const pathImages = import.meta.glob("../assets/*")

const getImagePathByName = (name: string) => {
    return pathImages[rootImagePath + name + ".png"].name
}

export const projects: IProject[] = [
    {
        title: "time manager",
        imageUrl: getImagePathByName("time-manager"),
        techs: [CTechs.JavaScript, CTechs.ReactRouterDom, CTechs.React],
        githubURL: "https://github.com/Jes015/Time-Manager",
        demoURL: "https://time-manager-zeta.vercel.app/",
    },
    {
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
        imageUrl: getImagePathByName("dev-vault"),
        techs: [CTechs.Typescript, CTechs.Nextjs, CTechs.AutoAnimate],
        githubURL: "https://github.com/Jes015/Dev-Vault/",
        demoURL: "https://dev-vault-ochre.vercel.app/",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
    {
        title: "Example1",
        imageUrl: "",
        techs: ["React", "Typescript"],
        githubURL: "https://example.com",
        demoURL: "https://example.com",
    },
]