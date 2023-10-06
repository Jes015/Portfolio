import { WatchImage } from '@components/Icons'
import { ImageViewerModal } from '@components/ImageViewer/components/'
import { type TImageArray } from "@src/models"
import { useState } from 'react'
import styles from './imageViewer.module.css'

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
            {
                isOpen &&
                <ImageViewerModal {...{ handleOnClickForOpenClose, styles, images, projectTitle }} />
            }
        </>
    )
}
