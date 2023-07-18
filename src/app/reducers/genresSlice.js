import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getGenres} from "../movieSearchAPI";

const initialState = {
    data: null,
    status: 'idle'
}

export const fetchGenresAsync = createAsyncThunk(
    'genres/fetchGenresAsync',
    async function(){
        const response = await getGenres();
        return response.genres;
    }
)

export const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchGenresAsync.pending, (state) => {
                        state.status = "loading";
                    })
                .addCase(fetchGenresAsync.fulfilled, (state, action) => {
                    state.status = "succeeded";
                    state.data = action.payload;
                    console.log(action.payload)
                })
                .addCase(fetchGenresAsync.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.error.message;
                })
        }
});

export const selectGenres = (state) => state.genres.data;
export default genresSlice.reducer;