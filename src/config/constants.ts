export const LIMIT_VARIANTS = [10, 20, 30]

export const ACCESS_TOKEN = "accessToken";
export const FETCH_LOGIN_PATH = "/login";
export const FETCH_REGISTER_PATH = "/register";
export const FETCH_SQUEEZE_PATH = "/squeeze";
export const FETCH_STATISTICS_PATH = "/statistics"
export const FETCH_REDIRECT_PATH = "/s"
export const FETCH_APPLICATION_HEADER ="application/json";
export const FETCH_X_FORM_HEADER ="application/x-www-form-urlencoded;charset=UTF-8";
export const BEARER_TOKEN_HEADER = 'Bearer ';
export const UNKNOWN_ERROR_MESSAGE = "неизвестная ошибка";
export const ORDER_PARAMETER_NAME = "order";
export const OFFSET_PARAMETER_NAME = "offset";
export const LIMIT_PARAMETER_NAME = "limit";
export const USER_NAME_PARAMETER_NAME = "username";
export const PASSWORD_PARAMETER_NAME = "password";
export const LINK_PARAMETER_NAME = "link";
export const POST_METHOD = "POST";
export const GET_METHOD = "GET";

export enum sortVariants {short = "short", counter = "counter", target = "target"}
export enum orderValuesVariants {not = 'not', desc = "desc", asc = "asc"}