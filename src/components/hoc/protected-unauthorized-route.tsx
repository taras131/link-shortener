import React, {FC, ReactElement} from 'react';
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import routes from "../../config/routes";
import {getIsAuth} from "../../store/auth/selector";

interface IProtectedUnauthorizedRoute {
    children: ReactElement
}

const ProtectedUnauthorizedRoute: FC<IProtectedUnauthorizedRoute> = ({children}) => {
    const {main} = routes;
    const isAuth: boolean = useAppSelector(state => getIsAuth(state))
    if (isAuth) return (<Navigate to={main.path}/>)
    return children;
};

export default ProtectedUnauthorizedRoute;