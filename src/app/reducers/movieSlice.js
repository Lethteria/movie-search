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
        console.log(response);
        if (response.original_title) return response;
        else throw new Error("The page haven't created yet");
    }
)

export const fetchFullMovieImg = createAsyncThunk(
    "movie/fetchFullMovieImgAsync",
    async function(id){
        let response = await getMovieImg(id)
        console.log(response);
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        removeMovie(state){
            state.data = null;
            state.status = "idle";
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchMovieAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovieAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log(action.payload);
                const movieResult = action.payload;
                state.data = mapMoviesFullData(movieResult);
            })
            .addCase(fetchMovieAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const {removeMovie} = movieSlice.actions;
export const selectMovie = (state) => state.movie.data;
export  const selectMovieStatus = (state) => state.movie.status;

export default movieSlice.reducer;