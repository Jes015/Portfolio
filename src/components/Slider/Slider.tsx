import styles from './slider.module.css'

interface IProps {
    min: number
    max: number
    step?: number
    currentValue?: number
    defaultValue?: number
    sideValues?: string[]
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Slider: React.FC<IProps> = ({ max, min, step, sideValues, onChange, currentValue, defaultValue }) => {

    return (
        <div className={styles.slider}>
            {sideValues != null && <span className={styles['slider__side-values']}>{sideValues[0]}</span>}
            <input
                onChange={onChange}
                className={styles.slider__element}
                value={currentValue}
                type="range"
                {...{ max, min, step, defaultValue }}
            />
            {sideValues != null && <span className={styles['slider__side-values']}>{sideValues[1]}</span>}
        </div>
    )
}