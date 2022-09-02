import {getAccessToken} from "./api-auth";
import {ILink, IParameters} from "../models/i-link";

const SQUEEZE_PATH = "/squeeze";
const STATISTICS_PATH = "/statistics"
export const BEARER_TOKEN_HEADER = 'Bearer ';

export const fetchSqueezeLink = async (link: string) => {
    const token = getAccessToken()
    let url = new URL(link);
    if (token) {
        const response = await fetch(process.env.REACT_APP_API_URL +
            `${SQUEEZE_PATH}?link=${url}`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                Authorization: BEARER_TOKEN_HEADER + token
            }
        })
        const decodedResponse = await response.json()
        if (response.ok) {
            return decodedResponse
        }
    }
}
export const fetchGetLinks = async (parameters: IParameters): Promise<ILink []> => {
    const {offset, limit, order} = parameters
    const token = getAccessToken()
    let url = `${process.env.REACT_APP_API_URL + STATISTICS_PATH}?offset=${offset}&limit=${limit}`
    if (order.short) url += "&order=" + order.short + "_short"
    if (order.counter) url += "&order=" + order.counter + "_counter"
    if (order.target) url += "&order=" + order.target + "_target"
    const response = await fetch(url,
        {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                Authorization: BEARER_TOKEN_HEADER + token
            }
        })
    const decodedResponse = await response.json()
    return decodedResponse
}