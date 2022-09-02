import React, {useEffect} from 'react';
import Button from "../../atoms/button/button";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {geIsAuth} from "../../../store/auth/selector";
import {useNavigate} from "react-router-dom";
import routes from "../../../config/routes";
import {toggleShowLinkModal} from "../../../store/link";
import styles from "./main.module.scss"
import TableLinks from "../../organism/table-links/table-links";

const Main = () => {
    const {main, register, login, profile} = routes;
    const isAuth = useAppSelector(state => geIsAuth(state))
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) navigate(login.path)
    }, [isAuth])
    const handleCreateLinkClick = () => {
        dispatch(toggleShowLinkModal())
    }
    return (
        <main>
            <div className={styles.container}>
                <section className={styles.header}>
                    <div className={styles.title_container}>
                        <p className={styles.title}>Краткость</p>
                        <p className={styles.subtitle}>-cестра таланта</p>
                    </div>
                    <Button text={"Укоротить"} isDisable={false} handleClick={handleCreateLinkClick}/>
                </section>
                <TableLinks/>
            </div>
        </main>
    );
};

export default Main;