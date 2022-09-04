import {createAsyncThunk} from "@reduxjs/toolkit";
import {IParameters} from "../../models/i-link";
import {handlerError} from "../../utils/services";
import {fetchSqueezeLink, fetchGetLinks} from "../../api/api-link";

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
    'link/get_all',
    async (parameters: IParameters, ThunkAPI) => {
        try {
            const res = await fetchGetLinks(parameters)
            return res
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e))
        }
    }
)
