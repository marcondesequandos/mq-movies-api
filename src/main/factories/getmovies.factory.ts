import { GetMoviesUsecase } from "application/usecases/movies/getmovies.usecase";
import { MoviesDiscoveryService } from "infra/services/movies-discovery";
import { Controller } from "presentation/contracts/Controller";
import { GetMoviesController } from "presentation/controllers/getmovies.controller";

export const makeGetMovies = (): Controller => {
  const moviesService = new MoviesDiscoveryService();
  const useCase = new GetMoviesUsecase(moviesService);
  return new GetMoviesController(useCase);
};
