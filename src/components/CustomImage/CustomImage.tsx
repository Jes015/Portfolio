import { useEffect, useRef, useState, type LegacyRef } from "react"
import styles from './image.module.css'

interface IProps {
    src: string
    srcPlaceHolder: string
    alt: string
}

export const CustomImage: React.FC<IProps> = ({ src, srcPlaceHolder }) => {
    const [showPlaceholder, setShowPlaceholder] = useState(true)
    const placeHolderImageRef = useRef<HTMLImageElement>()
    const ImageRef = useRef<HTMLImageElement>()

    useEffect(() => {
        // I'm doing server-rendering so this is necessary for First contentful paint FCP of the page
        if (ImageRef.current == null) return

        if (ImageRef.current.complete) {
            hidePlaceHolderImage()
            return
        }

        ImageRef.current.addEventListener('load', () => {
            hidePlaceHolderImage()
        })

    }, [])

    const hidePlaceHolderImage = () => {
        setShowPlaceholder(false)

        if (placeHolderImageRef.current == null) return
        placeHolderImageRef.current.style.display = 'none'
    }

    return (
        <div className={
            [
                styles.image__container,
                showPlaceholder && styles['image--loading']
            ].join(' ')
        }>
            <img
                ref={placeHolderImageRef as LegacyRef<HTMLImageElement>}
                src={srcPlaceHolder}
                className={[
                    styles.image,
                    styles['image--blur']
                ].join(' ')}
                style={{
                    display: 'block'
                }}
                alt='project image blurred'
            />
            <img
                ref={ImageRef as LegacyRef<HTMLImageElement>}
                {...{ src }}
                style={{
                    display: showPlaceholder ? 'none' : 'block',
                }}
                className={[styles.image, showPlaceholder && styles['image--opacity']].join(' ')}
                alt='project image'
            />
        </div>
    )
}