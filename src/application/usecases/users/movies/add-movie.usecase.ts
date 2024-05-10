import { AddMovieUseCaseInterface } from "@/application/contracts/usecases/users/movies/add-movie.usecase.interface";
import Movie from "@/application/entities/user/movie";
import MovieRepositoryInterface from "@/infra/modules/repositories/user/contracts/movie.repository-contract";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";

export default class AddMovieUseCase implements AddMovieUseCaseInterface {
  constructor(private readonly _addMovieRepository: MovieRepositoryInterface) {}
  async run(data: AddMovieInputDto): Promise<Movie> {
    const movie = await this._addMovieRepository.create(data);
    if (!movie) throw Error("Failed to create Movie");

    return movie;
  }
}
