import React from 'react';
import SearchMoviePage from "./pages/homePage";
import Header from "./components/header";

import {store} from "./app/store";

import {fetchAllMoviesAsync1} from "./app/reducers/searchSlice";
import {fetchGenresAsync} from "./app/reducers/genresSlice";

import {Route, Routes} from "react-router-dom";
import SearchByTitle from "./components/searchByTitle";
import SearchByFilters from "./components/searchByFilters";
import MoviePage from "./pages/moviePage";
import FavoritePage from "./pages/favoritePage";
import NotFoundPage from "./pages/notFound";

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

            <Route path="/*" element={<NotFoundPage/>}></Route>

        </Routes>

    </div>
  );
}

export default App;
