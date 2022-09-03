import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;