import { showBackgroundService } from "@src/services"
import { useEffect, useState } from "react"

interface IProps {
    children: React.ReactNode
}

export const OnTypeComponents: React.FC<IProps> = ({ children }) => {
    const [showBackground, setShowBackground] = useState(true)

    useEffect(() => {
        const onMessage = () => {
            setShowBackground((prevState) => !prevState)
        }

        showBackgroundService.listenEvent(onMessage)

    }, [])

    return (
        showBackground && children
    )
}