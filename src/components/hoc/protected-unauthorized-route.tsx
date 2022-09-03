import React, {FC, ReactElement} from 'react';
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {getIsAuth} from "../../store/auth/selector";
import routes from "../../config/routes";

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