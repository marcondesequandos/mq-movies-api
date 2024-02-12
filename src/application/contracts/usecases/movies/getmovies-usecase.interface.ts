import { Movie } from "@/application/entities/movie/movie";

export type MovieParams = {
  page?: number;
  woLanguage: string;
  sort_by?: string;
  include_adult?: string;
};

export interface GetMoviesUsecaseInterface {
  run(data?: any): Promise<Movie[]>;
}
