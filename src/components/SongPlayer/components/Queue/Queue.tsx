import type { TSongsArray } from "@models/song.model"
import { Song } from "@src/components/SongPlayer/components"
import styles from './queue.module.css'

interface IProps {
    songs: TSongsArray,
    setActualSong: (songTitle: string) => void
}

export const Queue: React.FC<IProps> = ({ songs, setActualSong }) => {
    return (
        <section className={styles.queue}>
            <header>
                <h3 className={styles.queue__title}>Queue</h3>
            </header>
            <main>
                <ul className={[styles.queue__list, 'scroll'].join(' ')}>
                    {
                        songs.map((song) => (
                            <li key={song.title}>
                                <Song {...{ song, setThisSong: () => { setActualSong(song.title) } }} />
                            </li>
                        ))
                    }
                </ul>
            </main>
        </section>
    )
}