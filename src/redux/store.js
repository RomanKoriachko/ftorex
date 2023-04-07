import { configureStore } from "@reduxjs/toolkit"
import pagesReducer from "./pagesReducer"
import tagsReducer from "./tagsReducer"

export const store = configureStore({
    reducer: {
        pageState: pagesReducer,
        tagsState: tagsReducer,
    },
})
