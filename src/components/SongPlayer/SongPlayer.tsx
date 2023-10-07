import { CustomImage } from "@src/components"
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
        previousSong
    } = useSongPlayer()

    return (
        <div className={styles.songPlayer}>
            <div className={styles['songPlayer__img-background-container']}>
                <CustomImage
                    alt="actual song image background"
                    src={currentSong.image[0].resized}
                    srcPlaceHolder={currentSong.image[0].resized}
                />
            </div>
            <header>
                <h2 className={styles.songPlayer__title}>Media Player</h2>
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
                        previousSong
                    }}
                />
                <Queue {...{ songs, setActualSong }} />
            </main>
        </div>
    )
}