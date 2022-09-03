import React, {FC, useCallback, useEffect} from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../../atoms/modal-overlay/modal-overlay";
import styles from "./modal.module.scss";

type TModal = {
    title?: string,
    closeModal: () => void
    children?: React.ReactNode
}
const modalRoot = document.getElementById("react-modals");
const Modal: FC<TModal> = ({title = '', closeModal, children}) => {
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeModal()
    }, [closeModal])
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])
    if (!modalRoot) return (<div></div>)
    return ReactDOM.createPortal(
        <>
            <div className={styles.content}
                 onClick={(e) => e.stopPropagation()}>
                <p className={styles.title}>{title}</p>
                <span className={styles.close_section} onClick={closeModal}>
                    Закрыть
                </span>
                {children}
            </div>
            <ModalOverlay closeModal={closeModal}/>
        </>, modalRoot)
};

export default Modal;

