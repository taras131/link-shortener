export interface ILink {
    counter: number,
    id: number,
    short: string,
    target: number
}
export interface IOrder {
    short: false | "asc" | "desc",
    counter: false | "asc" | "desc",
    target: false | "asc" | "desc",
}
export interface IParameters {
    offset: number,
    limit: number,
    order : IOrder
}