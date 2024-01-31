import { configureStore } from "@reduxjs/toolkit";


export const soundStore = configureStore({
    reducer:{
        thereducer:counterReducer,
    }
});