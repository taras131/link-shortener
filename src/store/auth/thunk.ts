import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchLogin, fetchRegistration} from "../../api/api-auth";
import {handlerError} from "../../utils/services";

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (user: { username: string, password: string }, ThunkAPI) => {
        try {
            const res = await fetchLogin(user);
            return res;
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e));
        }
    },
);
export const registrationThunk = createAsyncThunk(
    "auth/registration",
    async (user: { username: string, password: string }, ThunkAPI) => {
        try {
            const res = await fetchRegistration(user);
            return res;
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e));
        }
    },
);

