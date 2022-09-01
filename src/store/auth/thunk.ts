import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchLogin, fetchRegistration} from "../../api/api-auth";

export const handlerError = (e: any) => {
    if (e instanceof Error && e.message) return e.message;
    return 'неизвестная ошибка';
}

export const loginThunk = createAsyncThunk(
    'auth/login',
    // if you type your function argument here
    async (user: {username: string, password: string}, ThunkAPI) => {
        try {
            const res = await fetchLogin(user)
            return res
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e))
        }
    }
)
export const registrationThunk = createAsyncThunk(
    'auth/registration',
    async (user: {username: string, password: string}, ThunkAPI) => {
        try {
            const res = await fetchRegistration(user)
            return res
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e))
        }
    }
)

