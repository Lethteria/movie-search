import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from "./reducers/searchSlice"
import genresReducer from "./reducers/genresSlice"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    genres: genresReducer,
    counter: counterReducer,
  },
});
