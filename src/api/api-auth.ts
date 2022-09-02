const ACCESS_TOKEN = 'accessToken';
const LOGIN_PATH = '/login';
const REGISTER_PATH = '/register';

const setLocalStorage = (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken)
}
export const cleanLocalStorage = () => {
    localStorage.removeItem(ACCESS_TOKEN)
}
export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN)
}

export const fetchLogin = async (user: any) => {
    let formBody = [];
    for (let property in user) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(user[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    const response = await fetch(process.env.REACT_APP_API_URL + LOGIN_PATH, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody.join("&")
    })
    const decodedResponse = await response.json()
    console.log(decodedResponse)
    if (response.ok) {
        setLocalStorage(decodedResponse.access_token)
        return decodedResponse
    } else {
        throw new Error(decodedResponse.detail)
    }
}

export const fetchRegistration = async (user: { username: string, password: string }) => {
    const response = await fetch(process.env.REACT_APP_API_URL +
        `${REGISTER_PATH}?username=${user.username}&password=${user.password}`, {
        method: 'POST',
        headers: {
            'accept': 'application/json'
        },
    })
    const decodedResponse = await response.json()
    if (response.ok) {
        return decodedResponse
    } else {
        throw new Error(decodedResponse.message)
    }
}
