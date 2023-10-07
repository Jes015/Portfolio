import { IconPauseCircle, IconPlayCircle, IconPlaySkipBack, IconPlaySkipForward } from "@components/Icons"
import styles from './controlButtons.module.css'

interface IProps {
    toggleSongStatus: () => void
    isPlaying: boolean
    nextSong: () => void
    previousSong: () => void
}

export const ControlButtons: React.FC<IProps> = ({ isPlaying, toggleSongStatus, nextSong, previousSong }) => {

    const handleOnClickPlayPause = () => {
        toggleSongStatus()
    }

    return (
        <div className={styles.controlButtons}>
            <IconPlaySkipBack
                onClick={previousSong}
                className={
                    [
                        styles.controlButtons__button,
                        styles['controlButtons__button--side']
                    ].join(' ')
                }
            />
            <span
                onClick={handleOnClickPlayPause}
            >
                {
                    isPlaying
                        ?
                        <IconPauseCircle
                            className={
                                [
                                    styles.controlButtons__button,
                                    styles['controlButtons__button--main']
                                ].join(' ')
                            }
                        />
                        :
                        <IconPlayCircle
                            className={
                                [
                                    styles.controlButtons__button,
                                    styles['controlButtons__button--main']
                                ].join(' ')
                            }
                        />
                }
            </span>
            <IconPlaySkipForward
                onClick={nextSong}
                className={
                    [
                        styles.controlButtons__button,
                        styles['controlButtons__button--side']
                    ].join(' ')
                }
            />
        </div>
    )
}