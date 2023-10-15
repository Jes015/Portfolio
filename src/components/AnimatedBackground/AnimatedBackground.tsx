import styles from './animatedBackground.module.css'
import { calculateStarsForTheScreen } from './utils'

const frames = 2
export const AnimatedBackground = () => {
    const starsCount = calculateStarsForTheScreen()

    return (
        Array(frames).fill(null).map((_, frameIndex) => (
            <div
                key={frameIndex}
                className={
                    styles["animatedBackground__container"]
                }
                style={{
                    zIndex: -frameIndex
                }}
            >
                <div className={styles["animatedBackground__wrapper"]}>
                    {
                        Array(starsCount)
                            .fill(null)
                            .map((_, index) => {
                                const animationDelay = Math.random() * 80 + 1
                                const animationTime = Math.random() * 20 + 5
                                let scale = 1
                                const classesContainer = [styles["animatedBackground__star-container"]]

                                if (frameIndex === 0) {
                                    scale = Math.random() + 0.4
                                    
                                    if (scale < 0.6) {
                                        classesContainer.push(styles['animatedBackground__star-container--tiny'])
                                    }
                                }

                                if (frameIndex === 1) {
                                    scale = Math.floor(Math.random() * 10 + 1)
                                }

                                return (
                                    <span
                                        name='elemenr'
                                        key={`${frameIndex} + ${index}`}
                                        style={{
                                            // @ts-ignore This isn't wrong
                                            "--animation-delay": animationDelay + "s",
                                            "--animation-time": animationTime + "s",
                                            '--scale': scale
                                        }}
                                        className={classesContainer.join(' ')}
                                    >
                                        <div className={styles["animatedBackground__star"]} />
                                    </span>
                                )
                            })
                    }
                </div>
            </div>
        ))
    )
}
