import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getLinks, squeezeLink} from "./thunk";
import {ILink} from "../../models/i-link";

interface ILinkState {
    isLoading: boolean,
    errorMessage: string,
    isShowLinkModal: boolean,
    newLink: ILink | null;
    links: ILink[]
}

const initialState: ILinkState = {
    isLoading: false,
    errorMessage: '',
    isShowLinkModal: false,
    newLink: null,
    links: []
}
const link = createSlice({
    name: "link",
    initialState,
    reducers: {
        toggleShowLinkModal (state) {
            state.newLink = null
            state.isShowLinkModal = !state.isShowLinkModal
        }
    },
    extraReducers: {
        [squeezeLink.fulfilled.type]: (state,  action: PayloadAction<ILink>) => {
            state.newLink = action.payload
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
        [getLinks.fulfilled.type]: (state,  action: PayloadAction<ILink[]>) => {
            state.links = action.payload
            state.isLoading = false;
        },
        [getLinks.pending.type]: (state) => {
            state.isLoading = true
            state.errorMessage = '';
        },
        [getLinks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    }
})

export const {toggleShowLinkModal} = link.actions
export default link.reducer;