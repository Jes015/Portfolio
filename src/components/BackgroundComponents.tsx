import { AnimatedBackground, SongPlayer } from "@src/components"
import { showBackgroundService } from "@src/services"
import { useEffect, useState } from "react"

export const OnTypeComponents = () => {
    const [showBackground, setShowBackground] = useState(false)

    useEffect(() => {
        const onMessage = () => {
            setShowBackground((prevState) => !prevState)
        }

        showBackgroundService.listenEvent(onMessage)

    }, [])

    return (
        showBackground &&
        <>
            <AnimatedBackground />
            <SongPlayer />
        </>
    )
}