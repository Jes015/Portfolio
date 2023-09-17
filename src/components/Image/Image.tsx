import { useState } from "react"
import styles from './image.module.css'

interface IProps {
    src: string
    srcPlaceHolder: string
    alt: string
}

export const Image: React.FC<IProps> = ({ src, srcPlaceHolder }) => {
    const [showPlaceholder, setShowPlaceholder] = useState(true)

    const onLoad = () => {
        setShowPlaceholder(false)
    }
    const onStartLoad = () => {
        setShowPlaceholder(true)
    }

    return (
        <div className={
            [
                styles.image__container,
                showPlaceholder && styles['image--loading']
            ].join(' ')
        }>
            <img
                src={srcPlaceHolder}
                className={[
                    styles.image,
                    styles['image--blur']
                ].join(' ')}
                style={{
                    display: showPlaceholder ? 'block' : 'none'
                }}
                alt='project image blurred'
            />
            <img
                {...{ src }}
                onLoad={onLoad}
                style={{
                    display: showPlaceholder ? 'none' : 'block',
                }}
                onLoadStart={onStartLoad}
                className={[styles.image, showPlaceholder && styles['image--opacity']].join(' ')}
                alt='project image'
            />
        </div>
    )
}