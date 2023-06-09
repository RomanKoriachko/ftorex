import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk("fetchData", async function () {
    const response = await fetch(
        "https://commodities-api.com/api/latest?access_key=2io44hde9b6qqs2zj046i24v51w1l8s9pt1kfh41baku3t2wh7hbl7o83vx6&base=USD&symbols=RICE%2CWHEAT%2CSUGAR%2CCORN%2CWTIOIL%2CBRENTOIL%2CSOYBEAN%2CCOFFEE%2CXAU%2CXAG%2CXPD%2CXPT%2CXRH%2CRUBBER%2CETHANOL%2CCPO%2CNG%2CLUMBER%2CCOTTON%2CCOAL%2CCOCOA"
    )
    const data = await response.json()
    return data
})

const initialState = []

export const getDataReducer = createSlice({
    name: "weatherData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.push(action.payload)
        })
    },
})

export default getDataReducer.reducer
