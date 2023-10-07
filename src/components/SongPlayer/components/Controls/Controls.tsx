import { formatTime } from '@components/SongPlayer/utils'
import { ControlButtons, Slider } from '@src/components/SongPlayer/components'
import styles from './controls.module.css'

interface IProps {
    currentTime: number
    isPlaying: boolean
    toggleSongStatus: () => void
    setNewCurrentTime: (newCurrentTime: number) => void
    getCurrentSongData: () => { duration: number } | undefined
    nextSong: () => void
    previousSong: () => void
}
export const Controls: React.FC<IProps> = ({ isPlaying, currentTime, toggleSongStatus, setNewCurrentTime, getCurrentSongData, nextSong, previousSong }) => {

    const maxTime = getCurrentSongData()?.duration || 0

    return (
        <section className={styles.controls}>
            <Slider
                min={0}
                max={maxTime}
                sideValues={[formatTime(currentTime), formatTime(maxTime)]}
                onChange={(event) => {
                    const currentTime = event.currentTarget.value
                    setNewCurrentTime(Number(currentTime))
                }}
                {...{ currentTime }}
            />
            <ControlButtons {...{ toggleSongStatus, isPlaying, nextSong, previousSong }} />
        </section>
    )
}