import AddMovieUseCase from "@/application/usecases/user/list-item/movie/add-movie/add-movie.usecase";
import MovieRepository from "@/infra/modules/repositories/user/movie.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { AddMovieController } from "@/presentation/controllers/users/add-movie.controller";

export const makeAddMovie = (): Controller => {
  const movieRepository = new MovieRepository();
  const movieUseCase = new AddMovieUseCase(movieRepository);
  return new AddMovieController(movieUseCase);
};
