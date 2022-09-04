import {ILink, IParameters} from "../models/i-link";
import {getAccessToken, handleResponse} from "../utils/services";
import {
    BEARER_TOKEN_HEADER, FETCH_APPLICATION_HEADER,
    FETCH_SQUEEZE_PATH,
    FETCH_STATISTICS_PATH, GET_METHOD, LIMIT_PARAMETER_NAME, LINK_PARAMETER_NAME, OFFSET_PARAMETER_NAME,
    ORDER_PARAMETER_NAME, orderValuesVariants, POST_METHOD,
    sortVariants,
} from "../config/constants";


export const fetchSqueezeLink = async (link: string) => {
    const token = getAccessToken();
    const linkUrl = new URL(link);
    const url = process.env.REACT_APP_API_URL + `${FETCH_SQUEEZE_PATH}?${LINK_PARAMETER_NAME}=${linkUrl}`;
    if (token) {
        const response = await fetch(url, {
            method: POST_METHOD,
            headers: {
                "accept": FETCH_APPLICATION_HEADER,
                Authorization: BEARER_TOKEN_HEADER + token,
            },
        });
        const decodedResponse = await handleResponse(response);
        return decodedResponse.short;
    }
};
export const fetchGetLinks = async (parameters: IParameters): Promise<ILink []> => {
    const {offset, limit, order} = parameters;
    const token = getAccessToken();
    let url = `${process.env.REACT_APP_API_URL
    + FETCH_STATISTICS_PATH}?${OFFSET_PARAMETER_NAME}=${offset}&${LIMIT_PARAMETER_NAME}=${limit}`;
    if (order.short !== orderValuesVariants.not) url += `&${ORDER_PARAMETER_NAME}=${order.short}_${sortVariants.short}`;
    if (order.counter !== orderValuesVariants.not) {
        url += `&${ORDER_PARAMETER_NAME}=${order.counter}_${sortVariants.counter}`;
    }
    if (order.target !== orderValuesVariants.not) url +=
        `&${ORDER_PARAMETER_NAME}=${order.target}_${sortVariants.target}`;
    const response = await fetch(url,
        {
            method: GET_METHOD,
            headers: {
                "accept": FETCH_APPLICATION_HEADER,
                Authorization: BEARER_TOKEN_HEADER + token,
            },
        });
    return await handleResponse(response);
};