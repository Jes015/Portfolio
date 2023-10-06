import { ArrowLeft, ArrowRight, IconClose } from '@components/Icons'
import { useImageViewer } from '@components/ImageViewer/hooks'
import { CustomImage } from '@src/components/CustomImage'
import type { TImageArray } from '@src/models'
import { Suspense, lazy } from 'react'
import { createPortal } from 'react-dom'
import styles from './imageViewerModal.module.css'

const ImageCountByCircle = lazy(() => import('./ImageCountByCircle/ImageCountByCircle'))

interface IProps {
    projectTitle: string
    images: TImageArray
    handleOnClickForOpenClose: () => void
}

export const ImageViewerModal: React.FC<IProps> = ({ handleOnClickForOpenClose, images, projectTitle }) => {
    const { nextImage, previousImage, actualImageIndex, setImageByIndex } = useImageViewer({ images })

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return createPortal(
        <div className={styles.imageViewer__modal} onClick={handleOnClickForOpenClose}>
            <div onClick={handleOnClick} className={styles.imageViewer}>
                <div
                    className={styles['imageViewer__close-button-container']}
                    onClick={handleOnClickForOpenClose}
                >
                    <IconClose className={styles['imageViewer__close-button']} />
                </div>
                <div className={styles["imageViewer__button-container"]}>
                    {
                        actualImageIndex !== 0 &&
                        (

                            <button onClick={() => { previousImage() }} className={styles["imageViewer__button-control"]}>
                                <ArrowLeft className={styles['imageViewer__button-icon']} />
                            </button>

                        )
                    }
                </div>
                <div>
                    <header className={styles.imageViewer__header}>
                        <span className={styles.imageViewer__title} >{projectTitle} images</span>
                    </header>
                    <main>
                        <div className={styles['imageViewer__images-container']}>
                            {
                                images.map((imageData, index) => (
                                    <CustomImage
                                        key={index}
                                        styleContainer={{
                                            translate: `${-100 * actualImageIndex}%`
                                        }}
                                        src={imageData.normal}
                                        srcPlaceHolder={imageData.resized}
                                        alt='project image'
                                        className={styles['imageViewer__image-container']}
                                    />
                                ))
                            }
                            <Suspense>
                                <div className={styles['imagePreview__counter-container']}>
                                    {
                                        images.length > 1 &&
                                        <ImageCountByCircle {...{ setImageByIndex, actualImageIndex }} imageCount={images.length} />
                                    }
                                </div>
                            </Suspense>
                        </div>
                    </main>
                    <footer></footer>
                </div>
                <div className={styles["imageViewer__button-container"]}>
                    {
                        actualImageIndex !== images.length - 1 &&
                        (

                            <button onClick={() => { nextImage() }} className={styles["imageViewer__button-control"]}>
                                <ArrowRight className={styles['imageViewer__button-icon']} />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>,
        document.getElementById('modalElement') as HTMLElement
    )
}