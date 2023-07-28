import React from 'react';
import SearchMoviePage from "./pages/homePage";
import Header from "./components/header";

import {store} from "./app/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchAllMoviesAsync1} from "./app/reducers/searchSlice";
import {fetchGenresAsync} from "./app/reducers/genresSlice";
import MovieCardFull from "./components/movieCardFull";

store.dispatch(fetchAllMoviesAsync1(1));
store.dispatch(fetchGenresAsync());

function App() {
  return (
    <div className="App">
        <Header/>
        <MovieCardFull/>
        <SearchMoviePage/>
    </div>
  );
}

export default App;
