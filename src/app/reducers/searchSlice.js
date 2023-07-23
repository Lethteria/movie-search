import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAllMovies, searchByTitle, searchUseFilters} from "../movieSearchAPI";
import {mapMoviesData} from "../mapingDataHelper";

const initialState = {
    data: null,
    status: 'idle',// 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,//string | null
    currentPage: 1,
    totalPages: 0,
    searchType: "all"
}

export const fetchAllMoviesAsync1 = createAsyncThunk(
    "search/fetchAllMovies1",
    function (page){
        return getAllMovies(page);
    }
)
export const searchByTitleAsync1 = createAsyncThunk(
    "search/searchByTitleAsync1",
    async function (data){
        const {title,page} = data;
        if (!title.trim().length ) {throw Error("Please, enter the title of the movie.")}
        else {
            let result = await searchByTitle(title, page);

            if (result.total_results) return result
            else throw new Error("Nothing found for this title.");
        }
    }
)
export const searchUseFiltersAsync1 = createAsyncThunk(
    "search/searchUseFiltersAsync1",
    async function (data){
        const {param,page} = data;
        return await searchUseFilters(param,page);
    }
)

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        removeMovies: () => {},
        setCurrentPage(state, action){
            state.currentPage = action.payload
        },
        resetStatus(state){
            state.status = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchByTitleAsync1.pending, (state) => {
                state.status = "loading";
                state.searchType = "title";
            })
            .addCase(searchByTitleAsync1.fulfilled, (state, action) => {
                state.status = "succeeded";
                const moviesResult = action.payload;

                state.data = mapMoviesData(moviesResult.results);
                ( moviesResult.total_pages > 500 ) ? state.totalPages = 500 : state.totalPages = moviesResult.total_pages;
            })
            .addCase(searchByTitleAsync1.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                state.data = null;
                state.currentPage = 1;
                state.totalPages = 0;
            })
            .addCase(searchUseFiltersAsync1.pending, (state) => {
                state.status = "loading";
                state.searchType = "filters";
            })
            .addCase(searchUseFiltersAsync1.fulfilled, (state, action) => {
                state.status = "succeeded";
                const moviesResult = action.payload;
                state.data = mapMoviesData(moviesResult.results);
                ( moviesResult.total_pages > 500 ) ? state.totalPages = 500 : state.totalPages = moviesResult.total_pages;
            })
            .addCase(searchUseFiltersAsync1.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                console.error(state.error);
            })
            .addCase(fetchAllMoviesAsync1.pending, (state) => {
                state.status = "loading";
                state.searchType = "all";
            })
            .addCase(fetchAllMoviesAsync1.fulfilled, (state, action) => {
                const moviesResult = action.payload;
                state.status = "succeeded";
                state.data = mapMoviesData(moviesResult.results);
                ( moviesResult.total_pages > 500 ) ? state.totalPages = 500 : state.totalPages = moviesResult.total_pages;
                //state.totalPages = movies.total_pages;
            })
            .addCase(fetchAllMoviesAsync1.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const { setCurrentPage, resetStatus } = searchSlice.actions;

export const selectSearchResult = (state) => state.search.data;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchCurrentPage = (state) => state.search.currentPage;
export const selectSearchType = (state) => state.search.searchType;
export const selectSearchTotalPages = (state) => state.search.totalPages;
export const selectSearchError = (state) => state.search.error;

export default searchSlice.reducer;

