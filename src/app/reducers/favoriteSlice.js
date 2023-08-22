import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: [],
    totalResults: 0
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addMovie(state, action){
            state.data.push(action.payload);
            state.totalResults += 1;
        },
        removeMovie(state, action){
            let movieIndex = state.data.findIndex( item => item.id === action.payload);
            state.data.splice(movieIndex, 1)
            state.totalResults -= 1;
        }
    }
});

export const {addMovie, removeMovie} = favoriteSlice.actions;

export const selectFavoriteMovies = (state) => state.favorite.data;
export const selectFavoriteMoviesTotal = (state) => state.favorite.totalResults;

export default favoriteSlice.reducer;

