import React, {FC, useCallback, useEffect, useState} from "react";
import Modal from "../modal/modal";
import Input from "../../molecules/input/input";
import Button from "../../atoms/button/button";
import Preloader from "../../templates/preloader/preloader";
import styles from "./create-link-modal.module.scss";
import {toggleShowLinkModal} from "../../../store/link";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {squeezeLink} from "../../../store/link/thunk";
import {getErrorMessage, getIsLinkLoading, getNewLink} from "../../../store/link/selector";

const CreateLinkModal: FC = () => {
    const [value, setValue] = useState<string>("")
    const [message, setMessage] = useState("Кликнете по ссылке чтобы скопировать")
    const dispatch = useAppDispatch()
    const newLink = useAppSelector(state => getNewLink(state))
    const isLinkLoading = useAppSelector(state => getIsLinkLoading(state))
    const errorMessage = useAppSelector(state => getErrorMessage(state))
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }
    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        dispatch(squeezeLink(value))
    }
    const closeModal = useCallback(() => {
        dispatch(toggleShowLinkModal())
    }, [dispatch])
    useEffect(() => {
        if (errorMessage) {
            closeModal()
        }
    }, [errorMessage, closeModal])
    const handleResultClick = () => {
        if (newLink) {
            navigator.clipboard.writeText(process.env.REACT_APP_API_URL + "/s/" + newLink.short)
            setMessage("Ссылка успешно скопирована")
        }
    }
    return (
        <Modal closeModal={closeModal} title={"Здесь режут ссылки"}>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                {newLink && (
                    <>
                        <span className={styles.result_title}>Результат</span>
                        <p className={styles.result_content}
                           onClick={handleResultClick}>
                            {process.env.REACT_APP_API_URL + "/s/" + newLink.short}
                        </p>
                        <p>{message}</p>
                        <Button text={"Спасибо"} isDisable={false} handleClick={closeModal}/>
                    </>
                )}
                {!newLink && (
                    <>
                        <Input placeholder={"втавьте ссылку сюда"}
                               value={value}
                               name={"link"}
                               onChange={handleChange}
                               type={"text"}
                               labelName={"Ссылка для обрезания"}
                               error={""}
                               min={1}
                               max={65536}/>
                        {isLinkLoading && (<Preloader/>)}
                        {!isLinkLoading && (
                            <Button text={"Режь !"} isDisable={value.length === 0} handleClick={handleFormSubmit}/>
                        )}
                    </>
                )}
            </form>
        </Modal>
    );
};

export default CreateLinkModal;