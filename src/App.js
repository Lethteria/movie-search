import React from 'react';
import { Counter } from './features/counter/Counter';
import SearchMoviePage from "./pages/homePage";
import Header from "./components/header";

import 'bootstrap/dist/css/bootstrap.min.css';

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
