import { showBackgroundService } from '@src/services'
import { useEffect, useState } from 'react'
import styles from './keyListener.module.css'

const wordToListen = 'jes015'
const keysToListen = wordToListen.split('')

export const KeyListener = () => {
    const [typedKeys, setTypedKeys] = useState('')

    useEffect(() => {
        let timeoutClear: null | NodeJS.Timeout = null

        document.addEventListener("keyup", (event) => {
            setTypedKeys((lastKeys) => {
                const prevKey = lastKeys.at(-1)
                const lastKeysArray = lastKeys.split('')
                const keyPressed = event.key

                if (timeoutClear != null) {
                    clearTimeout(timeoutClear)
                }

                timeoutClear = setTimeout(() => {
                    setTypedKeys('')
                }, 800)

                const actualKeyIndex = keysToListen.findIndex((key) => key === keyPressed)
                const shouldActualTypedKeyBeRender = keysToListen[actualKeyIndex] === lastKeysArray[actualKeyIndex]

                if (shouldActualTypedKeyBeRender || prevKey === keyPressed || lastKeys.length === keysToListen.length) return lastKeys

                return lastKeys + keyPressed
            })

        })

        return () => {
            if (timeoutClear == null) return

            clearTimeout(timeoutClear)
        }
    }, [])

    useEffect(() => {
        if (typedKeys === wordToListen) {
            showBackgroundService.sendMessage()
        }
    }, [typedKeys])

    return (
        <section className={styles.keyListener__container}>
            <span className={styles['keyListener__auxiliar-key']}>Type</span>
            <div className={styles.keyListener}>
                {
                    keysToListen.map((key, index) => (
                        <kbd
                            key={key}
                            className={[
                                styles.keyListener__key,
                                typedKeys[index] === key && styles['keyListener__key--pressed']
                            ].join(' ')}
                        >
                            {key}
                        </kbd>
                    ))
                }
            </div>
        </section>
    )
}
