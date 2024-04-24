import { AddListItemUseCaseInterface } from "@/application/contracts/usecases/user/add-list-item.usecase.interface";
import Movie from "@/application/entities/user/movie";
import { createMovie } from "@/application/helpers/create-entity/create-movie.helper";
import MovieRepositoryInterface from "@/infra/modules/repositories/user/contracts/movie.repository-contract";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";

export default class AddListItemUseCase implements AddListItemUseCaseInterface {
  constructor(private readonly _addMovieRepository: MovieRepositoryInterface) {}
  async run(data: AddMovieInputDto): Promise<Movie> {
    const movie = createMovie.run(data);

    data.createdAt = movie.createdAt;
    data.updatedAt = movie.updatedAt;

    const createdMovie = await this._addMovieRepository.create(data);
    if (!createdMovie) throw Error("Failed to create Movie");

    return createdMovie;
  }
}
