import {RootState} from "../store";
import {ILink, IOrder} from "../../models/i-link";
import {orderValuesVariants, sortVariants} from "../../config/constants";

export const getAllLinks = (state: RootState): ILink [] => {
    return state.link.links;
};
export const getNewLink = (state: RootState): string | null => {
    return state.link.newLink;
};
export const getIsShowLinkModal = (state: RootState): boolean => {
    return state.link.isShowLinkModal;
};
export const getOrder = (state: RootState): IOrder => {
    return state.link.order;
};
export const getOrderValueByName = (state: RootState, name: sortVariants): orderValuesVariants => {
    return state.link.order[name];
};
export const getOffset = (state: RootState): number => {
    return state.link.offset;
};
export const getLimit = (state: RootState): number => {
    return state.link.limit;
};
export const getThereIsNextPage = (state: RootState): boolean => {
    return state.link.thereIsNextPage;
};
export const getIsLinkLoading = (state: RootState): boolean => {
    return state.link.isLoading;
};
export const getErrorMessage = (state: RootState): string => {
    return state.link.errorMessage;
};
