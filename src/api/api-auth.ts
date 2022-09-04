import {
    FETCH_APPLICATION_HEADER,
    FETCH_LOGIN_PATH,
    FETCH_REGISTER_PATH, FETCH_X_FORM_HEADER,
    PASSWORD_PARAMETER_NAME,
    POST_METHOD,
    USER_NAME_PARAMETER_NAME,
} from "../config/constants";
import {handleResponse, setLocalStorage} from "../utils/services";
import {IUserFromApi} from "../models/i-autch";

export const fetchLogin = async (user: IUserFromApi): Promise<string> => {
    const formBody = [];
    for (const property in user) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(user[property as keyof typeof user]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    const response = await fetch(process.env.REACT_APP_API_URL + FETCH_LOGIN_PATH, {
        method: POST_METHOD,
        headers: {
            "Content-Type": FETCH_X_FORM_HEADER,
        },
        body: formBody.join("&"),
    });
    const decodedResponse = await handleResponse(response);
    if (response.ok && decodedResponse.access_token) setLocalStorage(decodedResponse.access_token);
    return decodedResponse;
};
export const fetchRegistration = async (user: IUserFromApi): Promise<{ username: string }> => {
    const url = `${process.env.REACT_APP_API_URL + 
    FETCH_REGISTER_PATH}?${USER_NAME_PARAMETER_NAME}=${user.username}&${PASSWORD_PARAMETER_NAME}=${user.password}`;
    const response = await fetch(url, {
        method: POST_METHOD,
        headers: {
            "accept": FETCH_APPLICATION_HEADER,
        },
    });
    return await handleResponse(response);
};
