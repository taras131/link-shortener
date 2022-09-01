import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginThunk, registrationThunk} from "./thunk";


interface IAuthState {
    isAuth: boolean,
    isLoading: boolean,
    errorMessage: string,
}

const initialState: IAuthState = {
    isAuth: false,
    isLoading: false,
    errorMessage: '',
}
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        exit (state) {
            state.isAuth = false
        }
    },
    extraReducers: {
        [loginThunk.fulfilled.type]: (state) => {
            console.log('fulfilled.type')
            state.isAuth = true
            state.isLoading = false;
        },
        [loginThunk.pending.type]: (state) => {
            state.isLoading = true
            state.errorMessage = '';
        },
        [loginThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        [registrationThunk.fulfilled.type]: (state) => {
            state.isLoading = false;
        },
        [registrationThunk.pending.type]: (state) => {
            state.isLoading = true
            state.errorMessage = '';
        },
        [registrationThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },

    }
})

export const {exit} = auth.actions
export default auth.reducer;