import styles from './imageCountByCircle.module.css'

interface IProps {
    actualImageIndex: number
    imageCount: number
    setImageByIndex: (index: number) => void
}

const ImageCountByCircle: React.FC<IProps> = ({ actualImageIndex, imageCount, setImageByIndex }) => {

    const handleOnClick = (index: number) => () => {
        setImageByIndex(index)
    }

    return (
        <div className={styles['imageCountByCircle__container']}>
            {
                Array(imageCount).fill(null).map((_, index) => (
                    <div
                        key={index}
                        onClick={handleOnClick(index)}
                        className={[
                            styles.imageCountByCircle,
                            actualImageIndex === index ? styles['imageCountByCircle--selected'] : styles['imageCountByCircle--no-selected']
                        ].join(' ')}
                    />
                ))
            }
        </div>
    )
}

export default ImageCountByCircle