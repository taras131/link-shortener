import {getAccessToken} from "./api-auth";

const SQUEEZE_PATH = "/squeeze";
export const BEARER_TOKEN_HEADER = 'Bearer ';

export const fetchSqueezeLink = async (link: string) => {
    console.log(link)
    const token = getAccessToken()
    console.log(token)
    let url = new URL(link);
    if (token) {
        console.log('token')
        const response = await fetch(process.env.REACT_APP_API_URL +
            `${SQUEEZE_PATH}?link=${url}`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
        const decodedResponse = await response.json()
        console.log(decodedResponse)
        if (response.ok) {
            return decodedResponse
        }
    }
}