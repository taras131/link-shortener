import React, {FC, useEffect} from "react";
import classNames from "classnames";
import {Link, useLocation} from "react-router-dom";
import Input from "../../molecules/input/input";
import Button from "../../atoms/button/button";
import styles from "./auth.module.scss";
import routes from "../../../config/routes";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {registrationThunk, loginThunk} from "../../../store/auth/thunk";
import {resetInfoMessage} from "../../../store/auth";
import {getAuthIsLoading, getInfoMessage} from "../../../store/auth/selector";
import useFormWithValidation from "../../../hooks/useFormWithValidation";

const initialValues = {
    username: "",
    password: "",
}
const initialErrors = {
    username: "",
    password: "",
}

const Auth: FC = () => {
    const {login, register} = routes;
    const {pathname} = useLocation();
    const dispatch = useAppDispatch()
    const infoMessage = useAppSelector(state => getInfoMessage(state))
    const isAuthLoading = useAppSelector(state => getAuthIsLoading(state))
    const isLogin = pathname === login.path
    const {handleChange, isValid, errors, values} =
        useFormWithValidation(initialValues, initialErrors);
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (isLogin) {
            dispatch(loginThunk(values))
        } else {
            dispatch(registrationThunk(values))
        }
    }
    useEffect(() => {
        dispatch(resetInfoMessage())
    }, [pathname, dispatch])
    return (
        <div className={styles.form_wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{isLogin ? login.title : register.title}</legend>
                    <Input name={"username"}
                           labelName={"Имя пользователя:"}
                           placeholder={"Не менее 2 символов"}
                           type={"text"}
                           value={values.username}
                           error={errors.username.split(".")[0]}
                           onChange={handleChange}
                           min={2}
                           max={20}/>
                    <Input name={"password"}
                           labelName={"Пароль:"}
                           placeholder={"Не менее 4 символов"}
                           type={"password"}
                           value={values.password}
                           error={errors.password.split(".")[0]}
                           onChange={handleChange}
                           min={4}
                           max={20}/>
                    <p className={classNames(styles.message, {
                        [styles.positive_message]: infoMessage.isPositive
                    })}>{infoMessage.message}</p>
                    <Button text={isLogin ? "Войти" : "Зарегистрироваться"}
                            handleClick={handleSubmit}
                            isDisable={!isValid || values.username.length < 2 || values.username.password < 2 || isAuthLoading}/>
                    <span>
                        {isLogin
                            ? (<p>
                                <span>Не зарегистрированы ?</span>
                                <Link to={register.path}> Регистрация. </Link>
                            </p>)
                            : (<p>
                                <span>Уже зарегистрированы ?</span>
                                <Link to={login.path}> Вход. </Link>
                            </p>)
                        }
                    </span>
                </fieldset>
            </form>
        </div>
    );
};

export default Auth;