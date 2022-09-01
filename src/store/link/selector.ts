import {RootState} from "../store";

export const getAllLinks = (state: RootState) => {
    return state.link.links
}
export const getNewLink = (state: RootState) => {
    return state.link.newLink
}
export const getIsShowLinkModal = (state: RootState) => {
    return state.link.isShowLinkModal
}