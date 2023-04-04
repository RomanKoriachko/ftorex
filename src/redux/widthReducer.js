import { createSlice } from '@reduxjs/toolkit'

const initialState = 'auto'

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
