import { Movie } from "@/domain/movie/entity/movie";

export type MovieList = {
  id: string;
  name: string;
  movies: Movie[];
};
