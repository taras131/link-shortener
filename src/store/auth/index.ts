import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginThunk, registrationThunk} from "./thunk";

export interface IInfoMessage {
    isPositive: boolean,
    message: string
}
interface IAuthState {
    isAuth: boolean,
    isLoading: boolean,
    infoMessage: IInfoMessage,
}
const initialInfoMessage = {
    isPositive: false,
    message: ""
}
const initialState: IAuthState = {
    isAuth: false,
    isLoading: false,
    infoMessage: initialInfoMessage
}
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        exit(state) {
            state.isAuth = false
        },
        resetInfoMessage(state) {
            state.infoMessage = initialInfoMessage
        },
    },
    extraReducers: {
        [loginThunk.fulfilled.type]: (state) => {
            state.isAuth = true
            state.isLoading = false;
        },
        [loginThunk.pending.type]: (state) => {
            state.isLoading = true
            state.infoMessage = initialInfoMessage;
        },
        [loginThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.infoMessage = {isPositive: false, message: action.payload}
        },
        [registrationThunk.fulfilled.type]: (state) => {
            state.infoMessage = {isPositive: true, message: "Вы успешно зарегестрированы"};
            state.isLoading = false;
        },
        [registrationThunk.pending.type]: (state) => {
            state.isLoading = true
            state.infoMessage = initialInfoMessage;
        },
        [registrationThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.infoMessage = {isPositive: false, message: action.payload}
        }
    }
})

export const {exit, resetInfoMessage} = auth.actions
export default auth.reducer;