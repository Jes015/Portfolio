import styles from './imageCountByNumber.module.css'

interface IProps {
    actualImageIndex: number
    imageCount: number
}

const ImageCountByNumber: React.FC<IProps> = ({ actualImageIndex, imageCount }) => {
    return (
        <div className={styles.s}>
            {actualImageIndex} / {imageCount}
        </div>
    )
}

export default ImageCountByNumber