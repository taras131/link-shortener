import reducer, {initialState, exit, resetInfoMessage, IAuthState} from "./index";
import {AnyAction} from "@reduxjs/toolkit";

const state:IAuthState  = {
    isAuth: true,
    isLoading: false,
    infoMessage: {
        isPositive: true,
        message: "error",
    },
};
describe.only("Redux auth slice", () => {
    test("Should be return the initial state", () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
    });
    test("Should be isAuth is false", () => {
        const newState = reducer(state, exit);
        expect(newState.isAuth).toEqual(false);
    });
    test("Should be infoMessage equal initialInfoMessage", () => {
        const newState = reducer(state, resetInfoMessage);
        expect(newState.infoMessage.message).toEqual("");
    });
});