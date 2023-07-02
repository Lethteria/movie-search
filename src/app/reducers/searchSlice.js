import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAllMovies, searchByTitle, searchUseFilters} from "../movieSearchAPI";
import {mapMoviesData} from "../mapingDataHelper";

const initialState = {
    data: null,
    status: 'idle',// 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,//string | null
    currentPage: 1,
    searchType: "all",
    searchParam: null
}

export const fetchAllMoviesAsync1 = createAsyncThunk(
    "search/fetchAllMovies1",
    function (page){
        return getAllMovies(page);
    }
)
export const searchByTitleAsync1 = createAsyncThunk(
    "search/searchByTitleAsync1",
    function (data){
        const {title,page} = data;
        return searchByTitle(title, page);
    }
)
export const searchUseFiltersAsync1 = createAsyncThunk(
    "search/searchUseFiltersAsync1",
    function (data){
        const {keyword,page} = data;
        return searchUseFilters(data);
    }
)
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        removeMovies: () => {},
        setSearchParam(state,action){
            state.searchParam = action.payload
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload
        },
        resetStatus(state, action){
            state.status = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchByTitleAsync1.pending, (state, action) => {
                state.status = "loading";
                state.searchType = "title";
            })
            .addCase(searchByTitleAsync1.fulfilled, (state, action) => {
                state.status = "succeeded";
                const moviesResult = action.payload;
                state.data = mapMoviesData(moviesResult.results);
            })
            .addCase(searchByTitleAsync1.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(searchUseFiltersAsync1.pending, (state, action) => {
                state.status = "loading";
                state.searchType = "filters";
            })
            .addCase(searchUseFiltersAsync1.fulfilled, (state, action) => {
                state.status = "succeeded";
                const moviesResult = action.payload;
                state.data = mapMoviesData(moviesResult.results);
            })
            .addCase(searchUseFiltersAsync1.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchAllMoviesAsync1.pending, (state, action) => {
                state.status = "loading";
                state.searchType = "all";
            })
            .addCase(fetchAllMoviesAsync1.fulfilled, (state, action) => {
                const movies = action.payload;
                state.status = "succeeded";
                state.data = mapMoviesData(movies.results);
            })
            .addCase(fetchAllMoviesAsync1.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const { removeMovies, setCurrentPage, setSearchParam, resetStatus } = searchSlice.actions;

export const selectSearchResult = (state) => state.search.data;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchCurrentPage = (state) => state.search.currentPage;
export const selectSearchType = (state) => state.search.searchType;
export const selectSearchParam = (state) => state.search.searchParam;

export default searchSlice.reducer;

// const API_KEY = '2c5d54745aafd8076dfa859c4964b195';
// let url = {
// 	searchMovieUrl: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`,
// 	imgSrcUrl: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`,
// 	noImgSrcUrl: `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`
// }
