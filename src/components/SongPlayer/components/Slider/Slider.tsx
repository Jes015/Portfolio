import styles from './slider.module.css'

interface IProps {
    min: number
    max: number
    currentTime: number
    sideValues?: string[]
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Slider: React.FC<IProps> = ({ max, min, sideValues, onChange, currentTime }) => {

    return (
        <div className={styles.slider}>
            {sideValues != null && <span className={styles['slider__side-values']}>{sideValues[0]}</span>}
            <input
                onChange={onChange}
                className={styles.slider__element}
                value={currentTime}
                type="range"
                {...{ max, min }}
            />
            {sideValues != null && <span className={styles['slider__side-values']}>{sideValues[1]}</span>}
        </div>
    )
}