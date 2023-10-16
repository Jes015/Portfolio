import { CSongs } from "@data/songs.data"
import { CVolumeStatus, type TVolumeStatus } from "@src/components/SongPlayer/models"
import { useEffect, useRef, useState } from "react"
import { getActualVolumeState } from "../utils"

const defaultValues = {
    isPlaying: false,
    currentTime: CSongs[0].startAt,
    currentSongIndex: 0,
    songs: CSongs,
    volumeState: CVolumeStatus.high
}

export const useSongPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(defaultValues.isPlaying)
    const [currentSongIndex, setCurrentSongIndex] = useState(defaultValues.currentSongIndex)
    const [currentTime, setCurrentTime] = useState(defaultValues.currentTime)
    const [volumeState, setVolumeState] = useState<TVolumeStatus>(defaultValues.volumeState) // For icons
    const audio: React.MutableRefObject<HTMLAudioElement | null> = useRef(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        if (audio.current == null) return
        setIsLoading(true)

        const selectedSong = defaultValues.songs[currentSongIndex]
        setCurrentTime(selectedSong.startAt)

        audio.current.src = selectedSong.audio
        audio.current.currentTime = selectedSong.startAt

        const handleOnLoadStart = () => {
            setIsLoading(true)
        }

        const handleOnLoadData = () => {
            setIsLoading(false)
        }

        audio.current.addEventListener('loadstart', handleOnLoadStart)
        audio.current.addEventListener('canplay', handleOnLoadData)

        if (!isPlaying) {
            setIsPlaying(true)
        }

        audio.current.play()

        return () => {
            if (audio.current == null) return

            audio.current.removeEventListener('loadstart', handleOnLoadStart)
            audio.current.removeEventListener('canplay', handleOnLoadData)
        }
    }, [currentSongIndex])

    useEffect(() => {
        audio.current = new Audio(defaultValues.songs[currentSongIndex].audio)

        const handleOnTimeUpdate = () => {
            if (audio.current == null) return

            setCurrentTime(audio.current.currentTime)

            if (audio.current.currentTime === audio.current.duration) {
                setIsPlaying(false)
            }
        }

        audio.current.addEventListener('timeupdate', handleOnTimeUpdate)

        return () => {
            if (audio.current == null) return
            audio.current.pause()
            audio.current.removeEventListener('timeupdate', handleOnTimeUpdate)
            audio.current = null
        }
    }, [])

    const setActualSong = (songTitle: string) => {
        const songIndexFound = defaultValues.songs.findIndex((song) => song.title === songTitle)

        if (songIndexFound === -1) return

        setCurrentSongIndex(songIndexFound)
        setNewCurrentTime(0)
    }

    const nextSong = () => {
        const isTheLastSong = currentSongIndex === defaultValues.songs.length - 1
        if (isTheLastSong) {
            setCurrentSongIndex(0)
        } else {
            setCurrentSongIndex(currentSongIndex + 1)
        }
        setNewCurrentTime(0)
    }
    const previousSong = () => {
        const isTheFirstSong = currentSongIndex === 0
        if (isTheFirstSong) {
            setCurrentSongIndex(defaultValues.songs.length - 1)
        } else {
            setCurrentSongIndex(currentSongIndex - 1)
        }
        setNewCurrentTime(0)
    }

    const setNewCurrentTime = (newCurrentTime: number) => {
        if (audio.current == null) return
        setCurrentTime(newCurrentTime)
        audio.current.currentTime = newCurrentTime
    }

    const toggleSongStatus = () => {
        setIsPlaying(prevState => {

            if (audio.current == null) return prevState

            if (prevState) {
                audio.current.pause()
            } else {
                audio.current.play()
            }
            return !prevState
        })
    }

    const toggleMuteVolume = () => {
        if (audio.current == null) return
        audio.current.muted = !audio.current?.muted
        updateVolumeStatus()
    }

    const setNewVolume = (volume: number) => {
        if (audio.current == null) return
        audio.current.volume = volume
        updateVolumeStatus()
    }

    const updateVolumeStatus = () => {
        if (audio.current == null) return
        const newState = getActualVolumeState(audio.current.volume, volumeState)
        setVolumeState(newState)
    }

    const getCurrentSongData = () => {
        if (audio.current == null) return

        const audioData = {
            duration: audio.current.duration
        }

        return audioData
    }

    const filteredSongs = defaultValues.songs.filter((_, actualSongIndex) => actualSongIndex !== currentSongIndex)

    const currentSong = defaultValues.songs[currentSongIndex]

    return {
        currentTime,
        isPlaying,
        toggleSongStatus,
        setNewCurrentTime,
        getCurrentSongData,
        nextSong,
        previousSong,
        setActualSong,
        songs: filteredSongs,
        currentSong,
        toggleMuteVolume,
        setNewVolume,
        volumeState,
        isLoading
    }

}