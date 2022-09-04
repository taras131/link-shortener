import React, {FC} from "react";
import Router from "../../router/router";
import CreateLinkModal from "../organism/create-link-modal/create-link-modal";
import {useAppSelector} from "../../hooks/redux";
import {getIsShowLinkModal} from "../../store/link/selector";
import "./app.css";

const App:FC = () => {
    const isShowLinkModal = useAppSelector(state => getIsShowLinkModal(state));
    return (
        <div className="App">
            <Router/>
            {isShowLinkModal && (<CreateLinkModal/>)}
        </div>
    );
};

export default App;
