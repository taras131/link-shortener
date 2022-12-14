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
import {FETCH_REDIRECT_PATH} from "../../../config/constants";


const startMessage = "Вставьте ссылку в поле ниже";
const resultMessage = "Кликнете по ссылке чтобы скопировать";
const finishMessage = "Ссылка успешно скопирована";
const errorValidateLinkMessage = "Похоже, это не ссылка";

const CreateLinkModal: FC = () => {
    const [value, setValue] = useState<string>("");
    const [message, setMessage] = useState(startMessage);
    const dispatch = useAppDispatch();
    const newLink = useAppSelector(state => getNewLink(state));
    const newLinkFullValue = `${process.env.REACT_APP_API_URL+FETCH_REDIRECT_PATH}/${newLink}`;
    const isLinkLoading = useAppSelector(state => getIsLinkLoading(state));
    const errorMessage = useAppSelector(state => getErrorMessage(state));
    const linkValidation = (link: string): boolean => {
        try {
            new URL(link);
            return true;
        } catch (_) {
            setMessage(errorValidateLinkMessage);
            return false;
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(startMessage);
        setValue(e.target.value);
    };
    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (linkValidation(value)) {
            dispatch(squeezeLink(value));
        }
    };
    const closeModal = useCallback(() => {
        dispatch(toggleShowLinkModal());
    }, [dispatch]);
    useEffect(() => {
        if (errorMessage) {
            closeModal();
        }
    }, [errorMessage, closeModal]);
    const handleResultClick = () => {
        if (newLink) {
            navigator.clipboard.writeText(newLinkFullValue);
            setMessage(finishMessage);
        }
    };
    useEffect(() => {
        if (newLink) setMessage(resultMessage);
    }, [newLink]);
    return (
        <Modal closeModal={closeModal} title={"Здесь режут ссылки"}>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <p>{message}</p>
                {newLink && (
                    <>
                        <p className={styles.result_content}
                           onClick={handleResultClick}>
                            {newLinkFullValue}
                        </p>
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
                               labelName={""}
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