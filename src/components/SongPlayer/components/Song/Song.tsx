import { CustomImage } from '@components/CustomImage'
import { IconPlayCircle } from '@components/Icons'
import type { ISong } from '@models/song.model'
import styles from './song.module.css'

interface IProps {
    selected?: boolean
    song: ISong
    setThisSong?: () => void
}

export const Song: React.FC<IProps> = ({ song, selected = false, setThisSong }) => {
    return (
        <div className={styles.song}>
            <section className={
                [
                    styles['song__image--container'],
                    selected ? styles['song--selected'] : styles['song--no-selected']
                ].join(' ')
            }>
                <CustomImage
                    alt='{song name } image'
                    src={song?.image?.[0].normal}
                    srcPlaceHolder={song?.image?.[0].resized}
                    className={[
                        styles.song__image,
                        !selected && styles['song__image--no-selected']
                    ].join(' ')
                    }
                />
                {
                    !selected &&
                    <div
                        onClick={setThisSong}
                        className={styles['song__play-icon-container']}
                    >
                        <IconPlayCircle className={styles['song__play-icon']} />
                    </div>
                }
            </section>
            <section className={styles['song__data-container']}>
                <header>
                    <h3 className={styles.song__title}>{song?.title}</h3>
                </header>
                <main>
                    <p className={styles.song__description}>{song?.description}</p>
                </main>
                <footer>
                    <p className={styles['song__author--p']}>
                        <span>by</span> 
                        <span className={styles['song__author']}>{song?.author}</span>
                    </p>
                </footer>
            </section>
        </div>
    )
}