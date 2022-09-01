import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {squeezeLink} from "./thunk";

interface ILinkState {
    isLoading: boolean,
    errorMessage: string,
    isShowLinkModal: boolean
}

const initialState: ILinkState = {
    isLoading: false,
    errorMessage: '',
    isShowLinkModal: false
}
const link = createSlice({
    name: "link",
    initialState,
    reducers: {
        toggleShowLinkModal (state) {
            state.isShowLinkModal = !state.isShowLinkModal
        }
    },
    extraReducers: {
        [squeezeLink.fulfilled.type]: (state) => {
            console.log('fulfilled.type')
            state.isLoading = false;
        },
        [squeezeLink.pending.type]: (state) => {
            state.isLoading = true
            state.errorMessage = '';
        },
        [squeezeLink.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    }
})

export const {toggleShowLinkModal} = link.actions
export default link.reducer;