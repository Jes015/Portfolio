import { CVolumeStatus, type TVolumeStatus } from "@components/SongPlayer/models"
import { IconVolumeHigh, IconVolumeLow, IconVolumeMedium, IconVolumeOff, Slider } from "@src/components"
import styles from './volumeControl.module.css'

interface IProps {
    toggleMuteVolume: () => void
    setNewVolume: (volume: number) => void
    actualVolumeStatus: TVolumeStatus
}

export const VolumeControl: React.FC<IProps> = ({ toggleMuteVolume, setNewVolume, actualVolumeStatus }) => {

    const handleOnClickVolumeIcon = () => {
        toggleMuteVolume()
    }

    return (
        <section className={styles.volumeControl}>
            <div
                onClick={handleOnClickVolumeIcon}
            >
                {
                    CVolumeStatus.high === actualVolumeStatus && <IconVolumeHigh className={styles.volumeControl__icon} />
                }
                {
                    CVolumeStatus.medium === actualVolumeStatus && <IconVolumeMedium className={styles.volumeControl__icon} />
                }
                {
                    CVolumeStatus.low === actualVolumeStatus && <IconVolumeLow className={styles.volumeControl__icon} />
                }
                {
                    CVolumeStatus.off === actualVolumeStatus && <IconVolumeOff className={styles.volumeControl__icon} />
                }
            </div>
            <Slider
                min={0}
                max={1}
                step={0.025}
                onChange={(event) => {
                    const currentTime = event.currentTarget.value
                    setNewVolume(Number(currentTime))
                }}
            />
        </section>
    )
}