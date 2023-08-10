import React from 'react';
import SearchMoviePage from "./pages/homePage";
import Header from "./components/header";

import {store} from "./app/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchAllMoviesAsync1} from "./app/reducers/searchSlice";
import {fetchGenresAsync} from "./app/reducers/genresSlice";

import {Route, Routes} from "react-router-dom";
import ResultBlock from "./components/resultBlock";
import SearchBlock from "./components/searchBlock";
import SearchByTitle from "./components/searchByTitle";
import SearchByFilters from "./components/searchByFilters";
import MoviePage from "./pages/moviePage";
import FavoritePage from "./pages/favoritePage";

store.dispatch(fetchAllMoviesAsync1(1));
store.dispatch(fetchGenresAsync());

function App() {
  return (
    <div className="App">

        <Header/>

        <Routes>

            <Route path="/movie"
                   element={<MoviePage />}
            />

            <Route path="/favorite"
                   element={<FavoritePage />}
            />

            <Route path="/" element={<SearchMoviePage/>}>
                <Route index element={<SearchByTitle/>}></Route>
                <Route path="filters" element={<SearchByFilters/>}></Route>
            </Route>

        </Routes>

    </div>
  );
}

export default App;
