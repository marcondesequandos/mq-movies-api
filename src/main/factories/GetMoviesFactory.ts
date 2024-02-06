import { GetMoviesUsecase } from "application/usecases/movies/GetMovies.usecase";
import { MoviesDiscoveryService } from "infra/services/movies-discovery";
import { Controller } from "presentation/contracts/Controller";
import { GetMoviesController } from "presentation/controllers/GetMovies.controller";

export const makeGetMovies = (): Controller => {
  const moviesService = new MoviesDiscoveryService();
  const useCase = new GetMoviesUsecase(moviesService);
  return new GetMoviesController(useCase);
};
