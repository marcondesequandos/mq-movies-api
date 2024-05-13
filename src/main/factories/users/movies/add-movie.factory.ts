import AddMovieUseCase from "@/application/usecases/users/movies/add-movie.usecase";
import MovieRepository from "@/infra/repositories/user/movies/movie.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { AddMovieController } from "@/presentation/controllers/users/movies/add-movie.controller";

export const makeAddMovie = (): Controller => {
  const movieRepository = new MovieRepository();
  const movieUseCase = new AddMovieUseCase(movieRepository);
  return new AddMovieController(movieUseCase);
};
