import {RootState} from "../store";

export const geIsAuth = (state: RootState): boolean => {
    return state.auth.isAuth
}
export const getAuthIsLoading = (state: RootState): boolean => {
    return state.auth.isLoading
}
export const getErrorMessage = (state: RootState): string => {
    return state.auth.errorMessage
}

