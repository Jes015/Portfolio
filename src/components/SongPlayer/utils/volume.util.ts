import { CVolumeStatus, type TVolumeStatus } from "@src/components/SongPlayer/models"

export const getActualVolumeState = (audioValue: number, defaultVolumeState: TVolumeStatus) => {
    let newVolumeState: TVolumeStatus = defaultVolumeState

    if (audioValue > 0.7) {
        newVolumeState = CVolumeStatus.high
    } else if (audioValue > 0.4) {
        newVolumeState = CVolumeStatus.medium
    } else if (audioValue > 0) {
        newVolumeState = CVolumeStatus.low
    } else {
        newVolumeState = CVolumeStatus.off
    }

    return newVolumeState
}