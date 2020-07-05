import React from "react";
import { MovieClass } from "core/MovieClass";
import s from "./Movie.module.css";

const imagePath = "http://image.tmdb.org/t/p/w185";

type Props = {
  index: number;
  movie: MovieClass;
};

// ----------
// COMPONENT:
const Movie = ({ index, movie }: Props) => {
  return (
    <div className={s.root}>
      <img className={s.poster} alt="" src={imagePath + movie.posterPath} />
      <div>
        {index + 1}. {movie.title} ({movie.popularity})
      </div>
    </div>
  );
};

export default Movie;
