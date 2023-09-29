import { CTechs, type IImage, type IProject, type TImageArray } from "@src/models"

const rootImagePath = "/"
const extension = 'webp'

const getImagesPathByName = (name: string, maxImages: number) => {
    let routes: TImageArray = []

    let tempRoute: IImage | null = null

    Array(maxImages).fill(null).map((_, index) => {
        tempRoute = { normal: `${rootImagePath}${name}-${index + 1}.${extension}`, resized: `${rootImagePath}${name}-${index + 1}-resized.${extension}`}
        routes.push(tempRoute)
    })
    
    return routes
}

export const projects: IProject[] = [
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
        title: "time manager",
        description: "App for optimize and manage your time App for optimize and manage your time.",
        imageUrls: getImagesPathByName("time-manager", 4), 
        techs: [CTechs.JavaScript, CTechs.ReactRouterDom, CTechs.React],
        githubURL: "https://github.com/Jes015/Time-Manager",
        demoURL: "https://time-manager-zeta.vercel.app/",
    },
    {
        title: "nexus catalyst",
        description: "Dashboard for web developers to optimize and manage their time",
        imageUrls: getImagesPathByName("nexus-catalyst", 3),
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
        imageUrls: getImagesPathByName("dev-vault", 1),
        techs: [CTechs.Typescript, CTechs.Nextjs, CTechs.AutoAnimate, CTechs.jsonBin],
        githubURL: "https://github.com/Jes015/Dev-Vault/",
        demoURL: "https://dev-vault-ochre.vercel.app/",
    }
]