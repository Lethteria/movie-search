import React from 'react';
import { Counter } from './features/counter/Counter';
import SearchMoviePage from "./pages/homePage";
import Header from "./components/header";

import {fetchAllMoviesAsync} from "./app/reducers/allMoviesSlice";
import {store} from "./app/store";

import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch(fetchAllMoviesAsync(1));

function App() {
  return (
    <div className="App">
        <Header/>
        <SearchMoviePage/>
        <Counter />
    </div>
  );
}

export default App;
