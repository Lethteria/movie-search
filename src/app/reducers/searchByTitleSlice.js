import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {searchByTitle} from "../movieSearchAPI";
import {mapMoviesData} from "../mapingDataHelper";

const initialState = {
    data: null,
    status: 'idle',// 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,//string | null
    currentPage: 1
}

export const searchByTitleAsync = createAsyncThunk(
    "searchByTitle/searchByTitleAsync",
    function (data){
        const {title,page} = data;
        return searchByTitle(title, page);
    }
)
export const searchByTitleSlice = createSlice({
    name: "searchByTitle",
    initialState,
    reducers: {
        removeMoviesByTitle: () => {},
        setCurrentPageByTitle(state, action){
            state.currentPage = action.payload
        },
        resetStatusByTitle(state, action){
            state.status = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchByTitleAsync.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(searchByTitleAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                const moviesResult = action.payload;
                state.data = mapMoviesData(moviesResult.results);
            })
            .addCase(searchByTitleAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const { removeMoviesByTitle, setCurrentPageByTitle, resetStatusByTitle } = searchByTitleSlice.actions;

export const selectSearchByTitle = (state) => state.searchByTitle.data;
export const selectSearchByTitleStatus = (state) => state.searchByTitle.status;

export default searchByTitleSlice.reducer;

// const API_KEY = '2c5d54745aafd8076dfa859c4964b195';
// let url = {
// 	searchMovieUrl: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`,
// 	imgSrcUrl: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`,
// 	noImgSrcUrl: `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`
// }
