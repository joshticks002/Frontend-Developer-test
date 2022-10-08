import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArts = createAsyncThunk("arts/getArts", async() => {
    return fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=10").then(
        (res) => res.json()
    );
});

const artSlice = createSlice({
    name: "arts",
    initialState: {
        arts: [],
        loading: false,
    },
    extraReducers: {
        // pending
        [getArts.pending]: (state, action) => {
            state.loading = true;
        },
        // successful
        [getArts.fulfilled]: (state, action) => {
            state.loading = false;
            state.arts = action.payload;
        },
        // failed
        [getArts.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default artSlice.reducer;