import React, {FC} from "react";
import HeaderLink from "../../atoms/header-link/header-link";
import styles from "./header.module.scss";
import {useAppSelector} from "../../../hooks/redux";
import {getIsAuth} from "../../../store/auth/selector";
import routes from "../../../config/routes";

const Header: FC = () => {
    const {main, register, login, profile} = routes;
    const isAuth = useAppSelector(state => getIsAuth(state));
    return (
        <header className={styles.wrapper}>
            <nav className={styles.container}>
                <ul>
                    <HeaderLink path={main.path} title={main.title}/>
                    {!isAuth && (
                        <>
                            <HeaderLink path={register.path} title={register.title}/>
                            <HeaderLink path={login.path} title={login.title}/>
                        </>
                    )}
                    {isAuth && (<HeaderLink path={profile.path} title={profile.title}/>)}
                </ul>
            </nav>
        </header>
    );
};

export default Header;