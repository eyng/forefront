import { URL } from "./constants";
import { fetchUrl } from "./utils";
import { MovieClass } from "core/MovieClass";

export const fetchTopMovies = async (
  apiKey: string,
  page: number
): Promise<MovieClass[]> => {
  const data = await fetchUrl(
    URL.TOPMOVIES + `?api_key=${apiKey}&page=${page}`
  );

  const movies = data.results.map((movie: object) => new MovieClass(movie));

  return movies;
};
