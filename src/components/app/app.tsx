import React from "react";
import Router from "../../router/router";
import {useAppSelector} from "../../hooks/redux";
import {getIsShowLinkModal} from "../../store/link/selector";
import CreateLinkModal from "../organism/create-link-modal/create-link-modal";
import "./app.css";

function App() {
    const isShowLinkModal = useAppSelector(state => getIsShowLinkModal(state))
    return (
        <div className="App">
            <Router/>
            {isShowLinkModal && (<CreateLinkModal/>)}
        </div>
    );
}

export default App;
