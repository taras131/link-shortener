import {ACCESS_TOKEN, UNKNOWN_ERROR_MESSAGE} from "../config/constants";

const firstDetail = 0;

export const handlerError = (e: any) => {
    if (e instanceof Error && e.message) return e.message;
    return UNKNOWN_ERROR_MESSAGE;
};
export const setLocalStorage = (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
};
export const cleanLocalStorage = () => {
    localStorage.removeItem(ACCESS_TOKEN);
};
export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
};
export const handleResponse = async (response: any) => {
    const decodedResponse = await response.json();
    if (response.ok) {
        return decodedResponse;
    } else {
        const error = decodedResponse.detail[firstDetail].msg
            ? decodedResponse.detail[firstDetail].msg
            : decodedResponse.detail;
        throw new Error(error);
    }
};