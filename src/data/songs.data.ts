import type { TSongsArray } from "@src/models"
import { getImagesPathByName } from "@src/utils"

export const CSongs: TSongsArray = [
    {
        title: 'Dragon Peak',
        description: 'Electronic song. This is one of my favorites.',
        author: 'Jes015',
        audio: '/songs/song-2.ogg',
        image: getImagesPathByName('song-dragon-peak'),
        startAt: 0,
        createdOn: 1000000
    },
    {
        title: 'Ocean',
        description: 'This is my final production before I began working on vocal tracks.',
        author: 'Jes015',
        audio: '/songs/song-1.ogg',
        image: getImagesPathByName('song-ocean'),
        startAt: 15,
        createdOn: 1000000
    },
    {
        title: 'Neon Pulse',
        description: 'I created this track using just one synthesizer with automations.',
        author: 'Jes015',
        audio: '/songs/song-3.ogg',
        image: getImagesPathByName('song-neon-pulse'),
        startAt: 4,
        createdOn: 1000000
    },
    {
        title: 'latidos',
        description: 'I created all the elements of this song, but the kick lacks power.',
        author: 'Jes015',
        audio: '/songs/song-4.ogg',
        image: getImagesPathByName('song-latidos'),
        startAt: 4,
        createdOn: 1000000
    }
]