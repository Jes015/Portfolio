import { IconClose } from "@src/components"
import { createPortal } from "react-dom"
import styles from './modal.module.css'

interface IProps {
    title: string
    handleOnClickForOpenClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<IProps> = ({ title, handleOnClickForOpenClose, children }) => {
    return createPortal(
        <div className={styles.modal}>
            <div className={styles.modal__wrap}>
                <header className={styles.modal__header}>
                    <span className={styles.modal__title} >{title} images</span>
                    <button
                        className={styles['modal__close-button']}
                        onClick={handleOnClickForOpenClose}
                    >
                        <IconClose className={styles['modal__close-button-icon']} />
                    </button>
                </header>
                {children}
            </div>
        </div>,
        document.getElementById('modalElement') as HTMLElement
    )
}

export default Modal