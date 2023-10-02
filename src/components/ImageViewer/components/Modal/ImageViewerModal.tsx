import { ArrowLeft, ArrowRight } from '@components/Icons'
import { useImageViewer } from '@components/ImageViewer/hooks'
import { CustomImage } from '@src/components/CustomImage'
import type { TImageArray } from '@src/models'
import { Suspense, lazy } from 'react'
import { createPortal } from 'react-dom'
import styles from './imageViewerModal.module.css'


const ImageCountByNumber = lazy(() => import('./ImageCountByNumber/ImageCountByNumber'))
const ImageCountByCircle = lazy(() => import('./ImageCountByCircle/ImageCountByCircle'))

interface IProps {
    projectTitle: string
    images: TImageArray
    handleOnClickForOpenClose: () => void
}

export const ImageViewerModal: React.FC<IProps> = ({ handleOnClickForOpenClose, images, projectTitle }) => {
    const { nextImage, previousImage, indexForUser } = useImageViewer({ images })

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return createPortal(
        <div className={styles.imageViewer__modal} onClick={handleOnClickForOpenClose}>
            <div onClick={handleOnClick} className={styles.imageViewer}>
                <button onClick={() => { previousImage() }} className={styles["imageViewer__button-control"]}>
                    <ArrowLeft />
                </button>
                <div>
                    <header className={styles.imageViewer__header}>
                        <span className={styles.imageViewer__title} >{projectTitle} images</span>
                        <Suspense>
                            {
                                images.length > 7
                                    ?
                                    <ImageCountByNumber actualImageIndex={indexForUser} imageCount={images.length} />
                                    :
                                    <ImageCountByCircle actualImageIndex={indexForUser} imageCount={images.length} />
                            }
                        </Suspense>
                    </header>
                    <main>
                        <div className={styles['imageViewer__images-container']}>
                            {
                                images.map((imageData, index) => (
                                    <CustomImage
                                        key={index}
                                        id={String(index)}
                                        src={imageData.normal}
                                        srcPlaceHolder={imageData.resized}
                                        alt='project image'
                                        className={styles['imageViewer__image-container']}
                                    />
                                ))
                            }
                        </div>
                    </main>
                    <footer></footer>
                </div>
                <button onClick={() => { nextImage() }} className={styles["imageViewer__button-control"]}>
                    <ArrowRight />
                </button>
            </div>
        </div>,
        document.getElementById('modalElement') as HTMLElement
    )
}