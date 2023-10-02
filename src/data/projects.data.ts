import { CTechs, type IProject } from "@src/models"
import { getImagesPathByName } from "@src/utils"

export const CProjects: IProject[] = [
    {
        title: "CulinaryAlchemy",
        description: "Online platform that aims to revolutionize the way people discover, share, and explore recipes.",
        imageUrls: getImagesPathByName("culinary-alchemy", 11),
        techs: [
            CTechs.React,
            CTechs.Astro,
            CTechs.playwright,
            CTechs.Typescript,
            CTechs.axios, 
            CTechs.Zod, 
            CTechs.swr,
            CTechs.i18next,
            CTechs.million,
            CTechs.joyUI, 
            CTechs.ReactHookForm
        ],
        githubURL: "https://github.com/CulinaryAlchemy/CulinaryAlchemy",
        demoURL: "https://culinary-alchemy-web-app.vercel.app/",
    },
    {
        title: 'Blog',
        description: 'My blog: web dev tips, productivity, and valuable skills.',
        imageUrls: getImagesPathByName("blog", 2),
        techs: [
            CTechs.Astro,
            CTechs.React,
            CTechs.playwright,
            CTechs.Typescript,
            CTechs.Driverjs
        ],
        githubURL: 'https://github.com/Jes015/Blog',
        demoURL: 'https://blog-one-murex.vercel.app/'
    },
    {
        title: "nexus catalyst",
        description: "Dashboard for web developers to optimize and manage their time.",
        imageUrls: getImagesPathByName("nexus-catalyst", 3),
        techs: [
            CTechs.Typescript,
            CTechs.React,
            CTechs.Firebase,
            CTechs.ReactRouterDom,
            CTechs.Sooner,
            CTechs.ReactWinbox,
        ],
        githubURL: "https://github.com/Jes015/NexusCatalyst",
        demoURL: "https://nexus-catalyst.vercel.app/",
    },
    {
        title: "time manager",
        description: "App for optimize and manage your time.",
        imageUrls: getImagesPathByName("time-manager", 4), 
        techs: [CTechs.JavaScript, CTechs.ReactRouterDom, CTechs.React],
        githubURL: "https://github.com/Jes015/Time-Manager",
        demoURL: "https://time-manager-zeta.vercel.app/",
    },
    {
        title: "dev vault",
        description: "List of tools for web developers.",
        imageUrls: getImagesPathByName("dev-vault", 1),
        techs: [CTechs.Typescript, CTechs.Nextjs, CTechs.AutoAnimate, CTechs.jsonBin],
        githubURL: "https://github.com/Jes015/Dev-Vault/",
        demoURL: "https://dev-vault-ochre.vercel.app/",
    }
]