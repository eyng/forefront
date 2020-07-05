import React, { useState } from "react";
import { MovieClass } from "core/MovieClass";
import { fetchTopMovies } from "services/topMovies";
import { Movie } from "components";
import s from "./TopMovies.module.css";

const MoviesDefault: MovieClass[] = [];

// ----------
// COMPONENT:
const TopMovies = () => {
  // STATE:
  const [apiKey, setApiKey] = useState("");
  const [movies, setMovies] = useState(MoviesDefault);
  const [loading, setLoading] = useState(false);

  // FUNCTIONS:
  const onApiKeyChange = (event: any) => {
    setApiKey(event.target.value);
  };

  const onFetchClick = async () => {
    if (!apiKey) {
      return;
    }

    setLoading(true);

    const movies1 = await fetchTopMovies(apiKey, 1);
    const movies2 = await fetchTopMovies(apiKey, 2);
    const movies3 = await fetchTopMovies(apiKey, 3);
    const movies4 = await fetchTopMovies(apiKey, 4);
    const movies5 = await fetchTopMovies(apiKey, 5);

    const movies = [...movies1, ...movies2, ...movies3, ...movies4, ...movies5];
    setMovies(movies.sort(sortMoviesByPopularity));
    setLoading(false);
  };

  const sortMoviesByPopularity = (a: MovieClass, b: MovieClass) => {
    const ap = a.popularity;
    const bp = b.popularity;
    if (ap < bp) return 1;
    if (ap > bp) return -1;
    return 0;
  };

  return (
    <div className={s.root}>
      <div className="flexRow">
        <div className="label">Your api key:</div>
        <input
          type="text"
          className="apiKey"
          value={apiKey}
          onChange={onApiKeyChange}
        />
        <button onClick={onFetchClick}>Download movies</button>
      </div>

      {loading && <div>Downloading...</div>}

      {movies && movies.length > 0 && (
        <div className={s.movies}>
          {movies.map((item, index) => (
            <Movie key={index} index={index} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopMovies;
