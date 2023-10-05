import { useEffect, useRef, useState, type LegacyRef } from "react"
import styles from './image.module.css'

interface IProps {
    src: string
    srcPlaceHolder: string
    alt: string
    id?: string
    className?: string
}

export const CustomImage: React.FC<IProps> = ({ src, srcPlaceHolder, className, id }) => {
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
            {...{ id }}
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