import React from 'react';
import Button from "../../atoms/button/button";
import {useAppDispatch} from "../../../hooks/redux";
import {exit} from "../../../store/auth";
import styles from "./profile.module.scss";
import {cleanLocalStorage} from "../../../utils/services";

const Profile = () => {
    const dispatch = useAppDispatch()
    const handleExitClick = () => {
        cleanLocalStorage()
        dispatch(exit())
    }
    return (
        <div className={styles.wrapper}>
            <img src="https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg" alt="avatar"
                 className={styles.avatar}/>
            Profile
            <Button text={"Выйти"} handleClick={handleExitClick} isDisable={false}/>
        </div>
    );
};

export default Profile;