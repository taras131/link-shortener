import React, {FC} from "react";
import Button from "../../atoms/button/button";
import styles from "./profile.module.scss";
import {useAppDispatch} from "../../../hooks/redux";
import {exit} from "../../../store/auth";
import {cleanLocalStorage} from "../../../utils/services";

const Profile: FC = () => {
    const dispatch = useAppDispatch()
    const handleExitClick = () => {
        cleanLocalStorage()
        dispatch(exit())
    }
    return (
        <figure className={styles.wrapper}>
            <img src="https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg" alt="avatar"
                 className={styles.avatar}/>
            <figcaption>Profile</figcaption>
            <Button text={"Выйти"} handleClick={handleExitClick} isDisable={false}/>
        </figure>
    );
};

export default Profile;