import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/';
import linkReducer from "./link/";


const rootReducer = combineReducers({
    auth: authReducer,
    link: linkReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];