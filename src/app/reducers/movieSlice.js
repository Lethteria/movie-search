import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getMovie, getMovieImg} from "../movieSearchAPI";
import {mapMoviesFullData} from "../mapingDataHelper";

const initialState = {
    data: null,
    status: 'idle',
    error: ""
}

export const fetchMovieAsync = createAsyncThunk(
    "movie/fetchMovieAsync",
    async function(id){
        let response = await getMovie(id);
        if (response.original_title) return response;
        else throw new Error("The page haven't created yet");
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers:(builder) => {
        builder
            .addCase(fetchMovieAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovieAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                const movieResult = action.payload;
                state.data = mapMoviesFullData(movieResult);
            })
            .addCase(fetchMovieAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectMovie = (state) => state.movie.data;
export  const selectMovieStatus = (state) => state.movie.status;

export default movieSlice.reducer;