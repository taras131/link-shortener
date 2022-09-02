import React, {useEffect} from 'react';
import Button from "../../atoms/button/button";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {geIsAuth} from "../../../store/auth/selector";
import {useNavigate} from "react-router-dom";
import routes from "../../../config/routes";
import {exit} from "../../../store/auth";
import {cleanLocalStorage} from "../../../api/api-auth";
import styles from "./profile.module.scss";

const Profile = () => {
    const {login} = routes;
    const isAuth = useAppSelector(state => geIsAuth(state))
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) navigate(login.path)
    }, [isAuth])
    const handleExitClick = () => {
        cleanLocalStorage()
        dispatch(exit())
    }
    return (
        <div className={styles.wrapper}>
            <img src="https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg" alt="avatar" className={styles.avatar}/>
            Profile
            <Button text={"Выйти"} handleClick={handleExitClick} isDisable={false}/>
        </div>
    );
};

export default Profile;