import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {searchMovies} from "../movieSearchAPI";
import {mapMoviesData} from "../mapingDataHelper";

const initialState = {
    data: null,
    status: 'idle',// 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,//string | null
    currentPage: 1
    //loading: false,
    //isFetchError: false
}

export const searchMoviesAsync = createAsyncThunk(
    "search/searchMovies",
    function (title){
        return searchMovies(title);
    }
)
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        removeMovies: () => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchMoviesAsync.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(searchMoviesAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                const moviesResult = action.payload;
                state.data = mapMoviesData(moviesResult.results);
            })
            .addCase(searchMoviesAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const { removeMovies } = searchSlice.actions;

export const selectSearch = (state) => state.search.data;

export default searchSlice.reducer;

// const API_KEY = '2c5d54745aafd8076dfa859c4964b195';
// let url = {
// 	searchMovieUrl: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`,
// 	imgSrcUrl: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`,
// 	noImgSrcUrl: `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`
// }
