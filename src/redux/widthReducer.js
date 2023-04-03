import { createSlice } from '@reduxjs/toolkit'

const initialState = (window.innerWidth - 1330) / 2 + 1300

export const widthReducer = createSlice({
    name: 'width',
    initialState,
    reducers: {
        setWidth: (state, action) => {
            return action.payload
        },
    },
})

export const { setWidth } = widthReducer.actions
export default widthReducer.reducer
