import {orderValuesVariants} from "../config/constants";

export interface ILink {
    counter: number,
    id: number,
    short: string,
    target: number
}
export interface IOrder {
    short: orderValuesVariants,
    counter: orderValuesVariants,
    target: orderValuesVariants,
}
export interface IParameters {
    offset: number,
    limit: number,
    order : IOrder
}