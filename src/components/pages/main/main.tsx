import React, {useEffect} from 'react';
import Button from "../../atoms/button/button";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {geIsAuth} from "../../../store/auth/selector";
import {useNavigate} from "react-router-dom";
import routes from "../../../config/routes";
import {toggleShowLinkModal} from "../../../store/link";

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
            Main
            <Button text={"Укоротить"} isDisable={false} handleClick={handleCreateLinkClick}/>
        </main>
    );
};

export default Main;