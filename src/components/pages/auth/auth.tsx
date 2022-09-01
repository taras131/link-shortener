import React, {FC, useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import routes from "../../../config/routes";
import Input from "../../molecules/input/input";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import Button from "../../atoms/button/button";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {registrationThunk, loginThunk} from "../../../store/auth/thunk";
import styles from "./auth.module.scss";
import {geIsAuth} from "../../../store/auth/selector";

const initialValues = {
    username: "",
    password: "",
}
const initialErrors = {
    username: "",
    password: "",
}

const Auth: FC = () => {
    const {login, register, main} = routes;
    const {pathname} = useLocation();
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const isAuth = useAppSelector(state => geIsAuth(state))
    const isLogin = pathname === login.path
    useEffect(() => {
        if (isAuth) navigate(main.path)
    }, [isAuth])
    const {handleChange, isValid, errors, values, setValues, setIsValid} =
        useFormWithValidation(initialValues, initialErrors);
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (isLogin) {
            dispatch(loginThunk(values))
        } else {
            dispatch(registrationThunk(values))
        }
    }
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
                    <Button text={isLogin ? "Войти" : "Зарегистрироваться"}
                            handleClick={handleSubmit}
                            isDisable={!isValid || values.username.length < 2 || values.username.password < 2}/>
                    <span>
                        {isLogin
                            ? (<p>
                                <span>Ещё не зарегистрированы ?</span>
                                <Link to={register.path}> Регистрация </Link>
                            </p>)
                            : (<p>
                                <span>Уже зарегистрированы ?</span>
                                <Link to={login.path}> Вход </Link>
                            </p>)
                        }
                    </span>
                </fieldset>
            </form>
        </div>
    );
};

export default Auth;