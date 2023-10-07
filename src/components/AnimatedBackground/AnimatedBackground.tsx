import styles from './animatedBackground.module.css'
import { calculateStarsForTheScreen } from './utils'

export const AnimatedBackground = () => {
    const starsCount = calculateStarsForTheScreen()

    return (
        <div className={styles["animatedBackground__container"]}>
            <div className={styles["animatedBackground__wrapper"]}>
                {
                    Array(starsCount)
                        .fill(null)
                        .map((_, index) => {
                            const animationDelay = Math.random() * 80 + 1
                            const animationTime = Math.random() * 20 + 5

                            return (
                                <span
                                    name='elemenr'
                                    key={index}
                                    style={{
                                        // @ts-ignore This isn't wrong
                                        "--animation-delay": animationDelay + "s",
                                        "--animation-time": animationTime + "s"
                                    }}
                                    className={styles["animatedBackground__star-container"]}
                                >
                                    <div className={styles["animatedBackground__star"]} />
                                </span>
                            )
                        })
                }
            </div>
        </div>
    )
}
