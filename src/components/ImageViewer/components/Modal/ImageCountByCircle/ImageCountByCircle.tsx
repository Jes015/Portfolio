import styles from './imageCountByCircle.module.css'

interface IProps {
    actualImageIndex: number
    imageCount: number
}

const ImageCountByCircle: React.FC<IProps> = ({ actualImageIndex, imageCount }) => {
    actualImageIndex -= 1
    return (
        <div className={styles['imageCountByCircle__container']}>
            {
                Array(imageCount).fill(null).map((_, index) => (
                    <div
                        key={index}
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