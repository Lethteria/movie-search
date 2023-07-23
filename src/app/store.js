import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from "./reducers/searchSlice";
import searchParamReducer from "./reducers/searchParamSlice";
import genresReducer from "./reducers/genresSlice"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    searchParam: searchParamReducer,
    genres: genresReducer,
    counter: counterReducer,
  },
});
