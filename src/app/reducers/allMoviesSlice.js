import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAllMovies} from "../movieSearchAPI";
import {mapMoviesData} from "../mapingDataHelper";

const initialState = {
    data: null,
    status: 'idle',// 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,//string | null,
    currentPage: 1
}

export const fetchAllMoviesAsync = createAsyncThunk(
    "allMovies/fetchAllMovies",
    function (page){
        return getAllMovies(page);
    }
)
export const allMoviesSlice = createSlice({
    name: "allMovies",
    initialState,
    reducers: {
        removeAllMovies(state){
            state.data = null;
            state.status = "idle";
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllMoviesAsync.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchAllMoviesAsync.fulfilled, (state, action) => {
                const movies = action.payload;
                state.status = "succeeded";
                state.data = mapMoviesData(movies.results);
            })
            .addCase(fetchAllMoviesAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const { removeAllMovies, setCurrentPage } = allMoviesSlice.actions;

export const selectAllMovies = (state) => state.allMovies.data;
export const selectCurrentPage = (state) => state.allMovies.currentPage;


export default allMoviesSlice.reducer;
