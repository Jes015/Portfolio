import { ArrowLeft, ArrowRight } from '@components/Icons'
import { useImageViewer } from '@components/ImageViewer/hooks'
import { CustomImage } from '@src/components/CustomImage'
import type { TImageArray } from '@src/models'
import { Suspense, lazy } from 'react'
import styles from './imageViewerModal.module.css'

const ImageCountByCircle = lazy(() => import('./ImageCountByCircle/ImageCountByCircle'))

interface IProps {
    images: TImageArray
}

export const ImageViewerModal: React.FC<IProps> = ({ images }) => {
    const { nextImage, previousImage, actualImageIndex, setImageByIndex } = useImageViewer({ images })

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }

    return (
            <div onClick={handleOnClick} className={styles.imageViewer}>
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
    )
}

export default ImageViewerModal