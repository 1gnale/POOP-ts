import { configureStore } from "@reduxjs/toolkit";
import poemsReducer from "./poemsSlice";
import tagsReducer from "./tagsSlice";

export const store = configureStore({
    reducer: {
        poems: poemsReducer,
        tags: tagsReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;