import { Movie } from "@/application/entities/movie/movie";

export interface GetMoviesUsecaseInterface {
  run(data?: any): Promise<Movie[]>;
}
