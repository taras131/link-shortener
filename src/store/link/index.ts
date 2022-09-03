import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getLinks, squeezeLink} from "./thunk";
import {ILink, IOrder} from "../../models/i-link";


interface ILinkState {
    isLoading: boolean,
    errorMessage: string,
    isShowLinkModal: boolean,
    order: IOrder,
    offset: number,
    limit: number,
    newLink: ILink | null,
    links: ILink[],
    thereIsNextPage: boolean,

}

const initialState: ILinkState = {
    isLoading: true,
    errorMessage: '',
    isShowLinkModal: false,
    order: {
        short: false,
        counter: false,
        target: false,
    },
    offset: 0,
    limit: 10,
    newLink: null,
    links: [],
    thereIsNextPage: false
}
const link = createSlice({
    name: "link",
    initialState,
    reducers: {
        toggleShowLinkModal(state) {
            state.newLink = null
            state.isShowLinkModal = !state.isShowLinkModal
        },
        showNext(state) {
            state.offset = state.offset + state.limit
        },
        showPrevious(state) {
            state.offset = state.offset - state.limit
        },
        setOrder(state, action: PayloadAction<any>) {
            state.offset = 0
            state.order = {...state.order, [action.payload.name]: action.payload.value}
        },
        setLimit(state, action: PayloadAction<number>) {
            state.limit = action.payload
            state.offset = 0
        }
    },
    extraReducers: {
        [squeezeLink.fulfilled.type]: (state, action: PayloadAction<ILink>) => {
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
        [getLinks.fulfilled.type]: (state, action: PayloadAction<ILink[]>) => {
            if (action.payload[state.limit] && action.payload[state.limit].id) state.thereIsNextPage = true
            state.links = action.payload.slice(0, state.limit);
            state.isLoading = false;
        },
        [getLinks.pending.type]: (state) => {
            state.isLoading = true;
            state.thereIsNextPage = false;
            state.errorMessage = '';
        },
        [getLinks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    }
})

export const {toggleShowLinkModal, showNext, showPrevious, setOrder, setLimit} = link.actions
export default link.reducer;