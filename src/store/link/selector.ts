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
export const getOrder = (state: RootState) => {
    return state.link.order
}
export const getOffset = (state: RootState) => {
    return state.link.offset
}
export const getLimit = (state: RootState) => {
    return state.link.limit
}
export const getThereIsNextPage = (state: RootState) => {
    return state.link.thereIsNextPage
}
