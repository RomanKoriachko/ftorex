import { configureStore } from "@reduxjs/toolkit"
import pagesReducer from "./pagesReducer"

export const store = configureStore({
    reducer: {
        pageState: pagesReducer,
    },
})
