import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {searchUseFilters} from "../movieSearchAPI";
import {mapMoviesData} from "../mapingDataHelper";

const initialState = {
    data: null,
    status: 'idle',// 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,//string | null
    currentPage: 1
}

export const searchUseFiltersAsync = createAsyncThunk(
    "searchUseFilters/searchUseFiltersAsync",
    function (title){
        return searchUseFilters(title);
    }
)
export const searchUseFiltersSlice = createSlice({
    name: "searchUseFilters",
    initialState,
    reducers: {
        setCurrentPageFilters(state, action){
            state.currentPage = action.payload
        },
        resetStatusFilters(state, action){
            state.status = "idle"
        },
        removeMoviesFilters: () => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchUseFiltersAsync.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(searchUseFiltersAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                const moviesResult = action.payload;
                state.data = mapMoviesData(moviesResult.results);
            })
            .addCase(searchUseFiltersAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const { removeMoviesFilters, setCurrentPageFilters, resetStatusFilters } = searchUseFiltersSlice.actions;

export const selectSearchUseFilters = (state) => state.searchUseFilters.data;
export const selectSearchUseFiltersStatus = (state) => state.searchUseFilters.status;

export default searchUseFiltersSlice.reducer;

// const API_KEY = '2c5d54745aafd8076dfa859c4964b195';
// let url = {
// 	searchMovieUrl: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`,
// 	imgSrcUrl: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`,
// 	noImgSrcUrl: `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`
// }
