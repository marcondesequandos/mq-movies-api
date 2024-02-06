import { Movie } from "domain/entities/movie";

export interface GetMovies {
  run(data?: any): Promise<Movie[]>;
}
