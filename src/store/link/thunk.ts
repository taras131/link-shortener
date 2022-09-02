import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchGetLinks, fetchSqueezeLink} from "../../api/api-link";
import {handlerError} from "../auth/thunk";
import {IParameters} from "../../models/i-link";

export const squeezeLink = createAsyncThunk(
    'link/create',
    async (link: string, ThunkAPI) => {
        try {
            const res = await fetchSqueezeLink(link)
            return res
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e))
        }
    }
)

export const getLinks = createAsyncThunk(
    'link/get all',
    async (parameters: IParameters, ThunkAPI) => {
        try {
            const res = await fetchGetLinks(parameters)
            return res
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e))
        }
    }
)
