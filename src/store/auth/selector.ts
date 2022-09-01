import {RootState} from "../store";

export const geIsAuth = (state: RootState): boolean => {
    return state.auth.isAuth
}

export const getAuthIsLoading = (state: RootState): boolean => {
    return state.auth.isLoading
}
