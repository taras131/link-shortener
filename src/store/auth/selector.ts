import {RootState} from "../store";
import {IInfoMessage} from "../../models/i-autch";

export const getIsAuth = (state: RootState): boolean => {
    return state.auth.isAuth
}
export const getAuthIsLoading = (state: RootState): boolean => {
    return state.auth.isLoading
}
export const getInfoMessage = (state: RootState): IInfoMessage => {
    return state.auth.infoMessage
}

