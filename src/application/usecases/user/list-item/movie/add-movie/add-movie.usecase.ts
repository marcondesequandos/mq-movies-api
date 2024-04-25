import { AddListItemUseCaseInterface } from "@/application/contracts/usecases/user/add-list-item.usecase.interface";
import Movie from "@/application/entities/user/movie";
import MovieRepositoryInterface from "@/infra/modules/repositories/user/contracts/movie.repository-contract";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";

export default class AddListItemUseCase implements AddListItemUseCaseInterface {
  constructor(private readonly _addMovieRepository: MovieRepositoryInterface) {}
  async run(data: AddMovieInputDto): Promise<Movie> {
    const movie = this.createMovie(data);

    data.createdAt = movie.createdAt;
    data.updatedAt = movie.updatedAt;

    const createdMovie = await this._addMovieRepository.create(data);
    if (!createdMovie) throw Error("Failed to create Movie");

    return createdMovie;
  }

  private createMovie(input: AddMovieInputDto): Movie {
    return new Movie({
      backdrop_path: input.backdrop_path,
      original_language: input.original_language,
      original_title: input.original_title,
      poster_path: input.poster_path,
      release_date: input.release_date,
      title: input.title,
      vote_average: input.vote_average,
    });
  }
}
