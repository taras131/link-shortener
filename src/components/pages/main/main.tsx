import React, {useEffect} from 'react';
import Button from "../../atoms/button/button";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {geIsAuth} from "../../../store/auth/selector";
import {useNavigate} from "react-router-dom";
import routes from "../../../config/routes";
import {toggleShowLinkModal} from "../../../store/link";
import {getLinks} from "../../../store/link/thunk";
import {getAllLinks} from "../../../store/link/selector";
import Link from "../../molecules/link/link";

const Main = () => {
    const {main, register, login, profile} = routes;
    const isAuth = useAppSelector(state => geIsAuth(state))
    const links = useAppSelector(state => getAllLinks(state))
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) navigate(login.path)
    }, [isAuth, dispatch])
    useEffect(()=> {
        dispatch(getLinks({offset: 0, limit: 10}))
    }, [dispatch])
    const handleCreateLinkClick = () => {
        dispatch(toggleShowLinkModal())
    }
    const linksList = links.map(item => <Link {...item} key={item.id}/>)
    return (
        <main>
            Main
            <Button text={"Укоротить"} isDisable={false} handleClick={handleCreateLinkClick}/>
            <div>
                {linksList}
            </div>
        </main>
    );
};

export default Main;