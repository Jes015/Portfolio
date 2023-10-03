import type { ILocalSteps } from "@src/models"

export const localSteps: ILocalSteps[] = [
    {
        path: "/#projects",
        steps: [
            {
                element: "#project__image-container",
                popover: {
                    title: "Image viewer",
                    description:
                        "Click on the project image to view all the project's images.",
                    side: 'top',
                    align: 'center'
                },
            }
        ],
    },
    {
        path: '/#skills',
        steps: [
            {
                element: "#skill",
                popover: {
                    title: "Skill data",
                    description: "Click on each skill to find additional information about me in that specific tech."
                }
            }
        ]
    }
]