import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "../config/routes";
import Layout from "../components/templates/layout/layout";
import Main from "../components/pages/main/main";
import Auth from "../components/pages/auth/auth";
import Profile from "../components/pages/profile/profile";

const Router = () => {
    const { main, register, login, profile} = routes;
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={main.path} element={<Main />} />
                    <Route path={register.path} element={<Auth />} />
                    <Route path={login.path} element={<Auth />} />
                    <Route path={profile.path} element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;