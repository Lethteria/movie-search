import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from "./reducers/searchSlice";
import allMoviesReducer from "./reducers/allMoviesSlice";

export const store = configureStore({
  reducer: {
    allMovies: allMoviesReducer,
    search: searchReducer,
    counter: counterReducer,
  },
});
