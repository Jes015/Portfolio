import { ArrowLeft, ArrowRight } from '@components/Icons'
import { useImageViewer } from '@components/ImageViewer/hooks'
import { createPortal } from 'react-dom'
import styles from './imageViewerModal.module.css'

interface IProps {
    projectTitle: string
    images: string[]
    handleOnClickForOpenClose: () => void
}

export const ImageViewerModal: React.FC<IProps> = ({ handleOnClickForOpenClose, images, projectTitle }) => {
    const { actualImageSrc, actualImageIndex, nextImage, previousImage } = useImageViewer({ images })

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return createPortal(
        <div className={styles.imageViewer__modal} onClick={handleOnClickForOpenClose}>
            <div onClick={handleOnClick} className={styles.imageViewer}>
                <button onClick={() => {previousImage()}} className={styles["imageViewer__button-control"]}>
                    <ArrowLeft />
                </button>
                <div>
                    <header className={styles.imageViewer__header}>
                        <span className={styles.imageViewer__title} >{projectTitle} images</span>
                        <span className={styles.imageViewer__count}>{actualImageIndex} / {images.length}</span>
                    </header>
                    <main>
                        <img 
                            src={actualImageSrc} 
                            alt='project image'
                            className={styles.imageViewer__image}
                        />
                    </main>
                    <footer></footer>
                </div>
                <button onClick={() => {nextImage()}} className={styles["imageViewer__button-control"]}>
                    <ArrowRight />
                </button>
            </div>
        </div>,
        document.getElementById('modalElement') as HTMLElement
    )
}