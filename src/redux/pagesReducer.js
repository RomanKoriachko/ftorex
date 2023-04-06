import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page1: "active-page",
    page2: "",
    page3: "",
}

export const pagesReducer = createSlice({
    name: "weatherData",
    initialState,
    reducers: {
        onFirstPage: (state) => {
            return {
                page1: "active-page",
                page2: "",
                page3: "",
            }
        },
        onSecondPage: (state) => {
            return {
                page1: "",
                page2: "active-page",
                page3: "",
            }
        },
        onThirdPage: (state) => {
            return {
                page1: "",
                page2: "",
                page3: "active-page",
            }
        },
    },
})

export const { onFirstPage, onSecondPage, onThirdPage } = pagesReducer.actions

export default pagesReducer.reducer
