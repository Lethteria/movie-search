import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchUseFiltersReducer from "./reducers/searchUseFiltersSlice";
import searchByTitleReducer from "./reducers/searchByTitleSlice";
import allMoviesReducer from "./reducers/allMoviesSlice";
import searchReducer from "./reducers/searchSlice"

export const store = configureStore({
  reducer: {
    //allMovies: allMoviesReducer,
    //searchUseFilters: searchUseFiltersReducer,
    //searchByTitle: searchByTitleReducer,
    search: searchReducer,
    counter: counterReducer,
  },
});
