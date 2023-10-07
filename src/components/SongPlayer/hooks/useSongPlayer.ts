import { CSongs } from "@data/songs.data"
import { useEffect, useRef, useState } from "react"

const defaultValues = {
    isPlaying: false,
    currentTime: 0,
    currentSongIndex: 0,
    songs: CSongs
}

export const useSongPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(defaultValues.isPlaying)
    const [currentSongIndex, setCurrentSongIndex] = useState(defaultValues.currentSongIndex)
    const [currentTime, setCurrentTime] = useState(defaultValues.currentTime)
    const audio: React.MutableRefObject<HTMLAudioElement | null> = useRef(null)

    useEffect(() => {
        if (audio.current == null) return
        const selectedSong = defaultValues.songs[currentSongIndex]
        audio.current.src = selectedSong.audio
        audio.current.currentTime = selectedSong.startAt
        setCurrentTime(selectedSong.startAt)

        if (!isPlaying) {
            setIsPlaying(true)
        }

        audio.current.play()
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
            audio.current.removeEventListener('timeupdate', handleOnTimeUpdate)
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
        }else {
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

    const getCurrentSongData = () => {
        if (audio.current == null) return

        const audioData = {
            duration: audio.current.duration
        }

        return audioData
    }

    const filteredSongs = defaultValues.songs.filter((_, actualSongIndex) => actualSongIndex !== currentSongIndex)

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
        currentSong: defaultValues.songs[currentSongIndex]
    }

}