import { CustomImage, IconBxsChevronUp, IconWindowMinimize } from "@src/components"
import { useState } from "react"
import { Controls, Queue, Song } from "./components"
import { useSongPlayer } from "./hooks"
import styles from './songPlayer.module.css'

export const SongPlayer = () => {
    const {
        currentTime,
        getCurrentSongData,
        isPlaying,
        setNewCurrentTime,
        toggleSongStatus,
        currentSong,
        songs,
        setActualSong,
        nextSong,
        previousSong,
        setNewVolume,
        toggleMuteVolume,
        volumeState: actualVolumeStatus,
    } = useSongPlayer()

    const [isMinimized, setIsMinimized] = useState(false)

    const handleOnClickMinimize = () => {
        setIsMinimized(!isMinimized)
    }

    return (
        <div className={
            [
                styles.songPlayer,
                isMinimized ? styles['songPlayer--minimized'] : styles['songPlayer--display']
            ].join(' ')
        }
        >
            <div className={styles['songPlayer__img-background-container']}>
                <CustomImage
                    alt="actual song image background"
                    src={currentSong.image[0].resized}
                    srcPlaceHolder={currentSong.image[0].resized}
                />
            </div>
            <header className={styles.songPlayer__header}>
                <h2 className={styles.songPlayer__title}>Media Player</h2>
                <div className={styles['songPlayer__icon-minimize-container']} onClick={handleOnClickMinimize}>
                    {
                        isMinimized
                            ? <IconBxsChevronUp className={styles['songPlayer__icon-minimize']} />
                            : <IconWindowMinimize className={styles['songPlayer__icon-minimize']} />
                    }
                </div>
            </header>
            <main>
                <Song song={currentSong} selected />
                <Controls
                    {...{
                        isPlaying,
                        toggleSongStatus,
                        currentTime,
                        setNewCurrentTime,
                        getCurrentSongData,
                        nextSong,
                        previousSong,
                        setNewVolume,
                        toggleMuteVolume,
                        actualVolumeStatus
                    }}
                />
                <Queue {...{ songs, setActualSong }} />
            </main>
        </div>
    )
}