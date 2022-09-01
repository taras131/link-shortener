import React from 'react';
import './app.css';
import Router from "../../router/router";
import {useAppSelector} from "../../hooks/redux";
import Preloader from "../templates/preloader/preloader";
import {getAuthIsLoading} from "../../store/auth/selector";
import {getIsShowLinkModal} from "../../store/link/selector";
import CreateLinkModal from "../organism/create-link-modal/create-link-modal";

function App() {
    const isAuthLoading = useAppSelector(state => getAuthIsLoading(state))
    const isShowLinkModal = useAppSelector(state => getIsShowLinkModal(state))
    if (isAuthLoading) return (<Preloader/>)
    return (
        <div className="App">
            <Router/>
            {isShowLinkModal && (<CreateLinkModal/>)}
        </div>
    );
}

export default App;
