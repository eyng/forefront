import React from "react";
import { TopMovies } from "components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Top 100 movies</h1>
      </header>

      <TopMovies />
    </div>
  );
}

export default App;
