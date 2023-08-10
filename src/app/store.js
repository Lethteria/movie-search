import { configureStore } from '@reduxjs/toolkit';

import searchReducer from "./reducers/searchSlice";
import searchParamReducer from "./reducers/searchParamSlice";
import genresReducer from "./reducers/genresSlice";
import movieReducer from "./reducers/movieSlice";
import favoriteReducer from "./reducers/favoriteSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    searchParam: searchParamReducer,
    genres: genresReducer,
    movie: movieReducer,
    favorite: favoriteReducer,
  },
});
