import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArts = createAsyncThunk("arts/getArts", async() => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
    );
});

const artSlice = createSlice({
    name: "arts",
    initialState: {
        arts: [],
        loading: false,
    },
    extraReducers: {
        [getArts.pending]: (state, action) => {
            state.loading = true;
        },
        [getArts.fulfilled]: (state, action) => {
            state.loading = false;
            state.arts = action.payload;
        },
        [getArts.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default artSlice.reducer;