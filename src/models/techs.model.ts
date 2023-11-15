import { IconAstro, IconAxios, IconBell, IconBxlFirebase, IconCodeJson, IconConsoleLine, IconDiamond, IconI18next, IconJS, IconMui, IconNextjs, IconPlaywright, IconReact, IconReacthookform, IconReactrouter, IconSWR, IconShipWheel, IconSupabase, IconTypescript, IconWindow } from "@src/components/Icons"
import type { TIcon } from "@src/models"

export interface ITech {
    name: string
    Icon: TIcon
}

export type TTechsArray = ITech[]

const CTechs = {
    Astro: {
        name: "astro",
        Icon: IconAstro
    },
    AutoAnimate: {
        name: "AutoAnimate",
        Icon: IconConsoleLine
    },
    axios: {
        name: "axios",
        Icon: IconAxios
    },
    playwright: {
        name: "Playwright",
        Icon: IconPlaywright
    },
    Firebase: {
        name: "firebase",
        Icon: IconBxlFirebase
    },
    i18next: {
        name: 'i18next',
        Icon: IconI18next
    },
    JavaScript: {
        name: "javaScript",
        Icon: IconJS
    },
    joyUI: {
        name: "JoyUI",
        Icon: IconMui
    },
    jsonBin: {
        name: 'jsonBin',
        Icon: IconCodeJson
    },
    million: {
        name: 'million',
        Icon: IconReact
    },
    Nextjs: {
        name: "next.js",
        Icon: IconNextjs
    },
    React: {
        name: "react",
        Icon: IconReact
    },
    ReactHookForm: {
        name: "ReactHookForm",
        Icon: IconReacthookform
    },
    ReactRouterDom: {
        name: "react router dom",
        Icon: IconReactrouter
    },
    Sooner: {
        name: "sooner",
        Icon: IconBell
    },
    swr: {
        name: 'swr',
        Icon: IconSWR
    },
    Typescript: {
        name: "typeScript",
        Icon: IconTypescript
    },
    Zod: {
        name: "zod",
        Icon: IconDiamond
    },
    ReactWinbox : {
        name: 'react winbox',
        Icon: IconWindow
    },
    Driverjs: {
        name: 'Driver.js',
        Icon: IconShipWheel
    },
    Supabase: {
        name: 'Supabase',
        Icon: IconSupabase
    },
    Zustand: {
        name: 'Zustand',
        Icon: IconReact
    }
} as const

export { CTechs }
