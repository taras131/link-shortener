import reducer, {
    initialState,
    toggleShowLinkModal,
    showNext,
    showPrevious,
    setOrder,
    setLimit,
    ILinkState
} from "./index";
import {AnyAction} from "@reduxjs/toolkit";
import {orderValuesVariants, sortVariants} from "../../config/constants";

const state: ILinkState = {
    isLoading: true,
    errorMessage: '',
    isShowLinkModal: true,
    order: {
        short: orderValuesVariants.not,
        counter: orderValuesVariants.not,
        target: orderValuesVariants.not,
    },
    offset: 50,
    limit: 20,
    newLink: null,
    links: [],
    thereIsNextPage: false
}
describe.only("Redux link slice", () => {
    test("Should be return the initial state", () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual(initialState)
    })
    test("Should be isShowLinkModal is true", () => {
        const newState = reducer(initialState, toggleShowLinkModal)
        expect(newState.isShowLinkModal).toEqual(true);
    })
    test("Should be isShowLinkModal is false", () => {
        const newState = reducer(state, toggleShowLinkModal)
        expect(newState.isShowLinkModal).toEqual(false);
    })
    test("Should be offset is 10", () => {
        const newState = reducer(initialState, showNext)
        expect(newState.offset).toEqual(10);
    })
    test("Should be offset is 30", () => {
        const newState = reducer(state, showPrevious)
        expect(newState.offset).toEqual(30);
    })
    test("Should be order.counter is desk", () => {
        const newState = reducer(state, setOrder({name: sortVariants.counter, value: orderValuesVariants.desc}))
        expect(newState.order.counter).toEqual(orderValuesVariants.desc);
    })
    test("Should limit is 20", () => {
        const newState = reducer(initialState, setLimit(20))
        expect(newState.limit).toEqual(20);
    })
})