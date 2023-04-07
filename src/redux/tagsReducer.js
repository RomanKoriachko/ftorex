import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    tag7: "",
    tag8: "",
    tag9: "",
    tag10: "",
}

export const tagsReducer = createSlice({
    name: "weatherData",
    initialState,
    reducers: {
        setTag1: (state, action) => {
            return {
                ...state,
                tag1: action.payload,
            }
        },
        setTag2: (state, action) => {
            return {
                ...state,
                tag2: action.payload,
            }
        },
        setTag3: (state, action) => {
            return {
                ...state,
                tag3: action.payload,
            }
        },
        setTag4: (state, action) => {
            return {
                ...state,
                tag4: action.payload,
            }
        },
        setTag5: (state, action) => {
            return {
                ...state,
                tag5: action.payload,
            }
        },
        setTag6: (state, action) => {
            return {
                ...state,
                tag6: action.payload,
            }
        },
        setTag7: (state, action) => {
            return {
                ...state,
                tag7: action.payload,
            }
        },
        setTag8: (state, action) => {
            return {
                ...state,
                tag8: action.payload,
            }
        },
        setTag9: (state, action) => {
            return {
                ...state,
                tag9: action.payload,
            }
        },
        setTag10: (state, action) => {
            return {
                ...state,
                tag10: action.payload,
            }
        },
    },
})

export const {
    setTag1,
    setTag2,
    setTag3,
    setTag4,
    setTag5,
    setTag6,
    setTag7,
    setTag8,
    setTag9,
    setTag10,
} = tagsReducer.actions

export default tagsReducer.reducer
