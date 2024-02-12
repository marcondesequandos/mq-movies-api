import { Movie } from "../movie/movie";

export type MovieList = {
  id: string;
  name: string;
  movies: Movie[];
};
