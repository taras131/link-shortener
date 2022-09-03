import React, {FC, ReactElement} from 'react';
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {getIsAuth} from "../../store/auth/selector";
import routes from "../../config/routes";

interface IProtectedAuthorizedRoute {
    children: ReactElement
}

const ProtectedAuthorizedRoute: FC<IProtectedAuthorizedRoute> = ({children}) => {
    const isAuth = useAppSelector(state => getIsAuth(state))
    const {login} = routes;
    if (!isAuth) return (<Navigate to={login.path}/>)
    return children;
};

export default ProtectedAuthorizedRoute;