import { CTechs, type IProject } from "@src/models"
import { getImagesPathByName } from "@src/utils"

export const CProjects: IProject[] = [
    {
        title: "CulinaryAlchemy",
        description: "Social media to share recipes.",
        imageUrls: getImagesPathByName("culinary-alchemy"),
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
        title: "Spotify Clone",
        description: "A spotify clone.",
        imageUrls: getImagesPathByName("spotify-clone"),
        techs: [
            CTechs.Nextjs,
            CTechs.Supabase,
            CTechs.React,
            CTechs.Zustand,
            CTechs.Typescript,
            CTechs.Zod,
            CTechs.ReactHookForm,
            CTechs.Sooner
        ],
        githubURL: "https://github.com/Jes015/Spotify-Clone",
        demoURL: "https://spotify-clone-seven-ebon.vercel.app/",
    },
    {
        title: 'Blog',
        description: 'My blog: web dev tips, productivity, and valuable skills.',
        imageUrls: getImagesPathByName("blog"),
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
        imageUrls: getImagesPathByName("nexus-catalyst"),
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
        imageUrls: getImagesPathByName("time-manager"),
        techs: [CTechs.JavaScript, CTechs.ReactRouterDom, CTechs.React],
        githubURL: "https://github.com/Jes015/Time-Manager",
        demoURL: "https://time-manager-zeta.vercel.app/",
    },
    {
        title: "dev vault",
        description: "List of tools for web developers.",
        imageUrls: getImagesPathByName("dev-vault"),
        techs: [CTechs.Typescript, CTechs.Nextjs, CTechs.AutoAnimate, CTechs.jsonBin],
        githubURL: "https://github.com/Jes015/Dev-Vault/",
        demoURL: "https://dev-vault-ochre.vercel.app/",
    }
]