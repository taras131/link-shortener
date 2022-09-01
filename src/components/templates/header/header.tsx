import React, {FC} from 'react';
import styles from './header.module.scss';
import routes from "../../../config/routes";
import HeaderLink from "../../atoms/header-link/header-link";
import {useAppSelector} from "../../../hooks/redux";
import {geIsAuth} from "../../../store/auth/selector";

const Header: FC = () => {
    const {main, register, login, profile} = routes;
    const isAuth = useAppSelector(state => geIsAuth(state))
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