import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchSqueezeLink} from "../../api/api-link";
import {handlerError} from "../auth/thunk";

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