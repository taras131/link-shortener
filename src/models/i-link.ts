import {orderValuesVariants} from "../utils/constants";

export interface ILink {
    counter: number,
    id: number,
    short: string,
    target: number
}
export interface IOrder {
    short: orderValuesVariants.not | orderValuesVariants.asc | orderValuesVariants.desc,
    counter: orderValuesVariants.not | orderValuesVariants.asc | orderValuesVariants.desc,
    target: orderValuesVariants.not | orderValuesVariants.asc | orderValuesVariants.desc
}
export interface IParameters {
    offset: number,
    limit: number,
    order : IOrder
}