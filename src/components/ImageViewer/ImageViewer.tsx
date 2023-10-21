import { WatchImage } from '@components/Icons'
import { type TImageArray } from "@src/models"
import { Suspense, lazy, useState } from 'react'
import styles from './imageViewer.module.css'

const ImageViewerModal = lazy(() => import('@components/ImageViewer/components/Modal/ImageViewerModal'))
const Modal = lazy(() => import('@src/components/Modal/Modal'))

interface IProps {
    images: TImageArray
    projectTitle: string
}

export const ImageViewer: React.FC<IProps> = ({ images, projectTitle }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClickForOpenClose = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className={styles.imagePreview} onClick={handleOnClickForOpenClose}>
                <WatchImage className={styles.imagePreview__image} />
            </div>
            <Suspense>
                {
                    isOpen &&
                    <Modal title={projectTitle} {...{ handleOnClickForOpenClose }}>
                        <ImageViewerModal {...{ styles, images }} />
                    </Modal>
                }
            </Suspense>
        </>
    )
}
