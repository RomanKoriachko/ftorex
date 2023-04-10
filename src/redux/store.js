import { configureStore } from "@reduxjs/toolkit"
import pagesReducer from "./pagesReducer"
import tagsReducer from "./tagsReducer"
import getDataReducer from "./getDataReducer"
import callbackFormReducer from "./callbackFormReducer"

export const store = configureStore({
    reducer: {
        pageState: pagesReducer,
        tagsState: tagsReducer,
        dataState: getDataReducer,
        callbackFormState: callbackFormReducer,
    },
})
