import { createSlice } from "@reduxjs/toolkit"

const initialState = "hide"

export const callbackFormReducer = createSlice({
    name: "calbackForm",
    initialState,
    reducers: {
        openCallbackForm: (state) => {
            return "show"
        },
        closeCallbackForm: (state) => {
            return "hide"
        },
    },
})

export const { openCallbackForm, closeCallbackForm } =
    callbackFormReducer.actions

export default callbackFormReducer.reducer
