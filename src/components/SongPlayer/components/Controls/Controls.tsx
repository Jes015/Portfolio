import type { TVolumeStatus } from '@components/SongPlayer/models'
import { formatTime } from '@components/SongPlayer/utils'
import { Slider } from '@src/components'
import { ControlButtons, VolumeControl } from '@src/components/SongPlayer/components'
import styles from './controls.module.css'

interface IProps {
    currentTime: number
    isPlaying: boolean
    toggleSongStatus: () => void
    setNewCurrentTime: (newCurrentTime: number) => void
    getCurrentSongData: () => { duration: number } | undefined
    nextSong: () => void
    previousSong: () => void
    toggleMuteVolume: () => void
    setNewVolume: (volume: number) => void
    actualVolumeStatus: TVolumeStatus
}

export const Controls: React.FC<IProps> = ({ isPlaying, currentTime, toggleSongStatus, setNewCurrentTime, getCurrentSongData, nextSong, previousSong, toggleMuteVolume, setNewVolume, actualVolumeStatus }) => {

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
                currentValue={currentTime}
            />
            <div className={styles['controls__second-box']}>
                <ControlButtons {...{ toggleSongStatus, isPlaying, nextSong, previousSong }} />
                <VolumeControl {...{ toggleMuteVolume, setNewVolume, actualVolumeStatus }} />
            </div>
        </section>
    )
}