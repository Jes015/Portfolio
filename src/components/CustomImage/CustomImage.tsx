import { useEffect, useRef, useState, type LegacyRef } from "react"
import styles from './image.module.css'

interface IProps {
    src: string
    srcPlaceHolder: string
    alt: string
    className?: string
    styleContainer?: React.CSSProperties
}

export const CustomImage: React.FC<IProps> = ({ src, srcPlaceHolder, className, styleContainer }) => {
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

        const timeout = setTimeout(() => {
            if (placeHolderImageRef.current == null) {
                clearTimeout(timeout)
                return
            }
            placeHolderImageRef.current.remove()
            clearTimeout(timeout)
        }, 1000)
    }

    return (
        <div
            style={styleContainer}
            className={
                [
                    className ?? styles.image__container,
                    showPlaceholder && styles['image--loading']

                ].join(' ')
            }
        >
            <img
                ref={placeHolderImageRef as LegacyRef<HTMLImageElement>}
                src={srcPlaceHolder}
                className={[
                    styles.image,
                    styles['image--blur'],
                ].join(' ')}
                alt='project image blurred'
            />
            <img
                ref={ImageRef as LegacyRef<HTMLImageElement>}
                {...{ src }}
                style={{
                    zIndex: showPlaceholder ? -10 : 0,
                }}
                className={[
                    styles.image,
                    (!showPlaceholder && styles['image--no-opacity']),
                ].join(' ')
                }
                alt='project image'
            />
        </div>
    )
}