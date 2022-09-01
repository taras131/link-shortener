import React, {useState} from 'react';
import Modal from "../modal/modal";
import Input from "../../molecules/input/input";
import Button from "../../atoms/button/button";
import {toggleShowLinkModal} from "../../../store/link";
import styles from "./create-link-modal.module.scss"
import {useAppDispatch} from "../../../hooks/redux";
import {squeezeLink} from "../../../store/link/thunk";

const CreateLinkModal = () => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string>("")
    const dispatch = useAppDispatch()
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }
    const handleFormSubmit = (e:any) => {
        e.preventDefault()
        dispatch(squeezeLink(value))
    }
    const closeModal = () => {
        dispatch(toggleShowLinkModal())
    }
    return (
        <Modal closeModal={closeModal} title={"Здесь режут ссылки"}>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <Input placeholder={"втавьте ссылку сюда"}
                       value={value}
                       name={"link"}
                       onChange={handleChange}
                       type={"text"}
                       labelName={"Ссылка для обрезания"}
                       error={""}
                       min={1}
                       max={65536}/>
                <Button text={"Режь !"} isDisable={value.length === 0} handleClick={handleFormSubmit}/>
            </form>


        </Modal>
    );
};

export default CreateLinkModal;