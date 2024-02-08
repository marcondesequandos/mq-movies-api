import { Movie } from "domain/entities/movie";

export type MovieParams = {
  page?: number;
  woLanguage: string;
  sort_by?: string;
  include_adult?: string;
};

export interface GetMovies {
  run(data?: any): Promise<Movie[]>;
}
