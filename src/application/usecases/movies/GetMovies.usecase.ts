import UseCaseInterface from "@shared/usecase/usecase.interface";
import { Movie } from "domain/entities/movie";
import { GetMovies } from "domain/usecases/GetMovies";
import { MoviesDiscoveryService } from "infra/services/movies-discovery";

export class GetMoviesUsecase implements GetMovies {
  private moviesData: Movie[];
  constructor(private readonly moviesService: MoviesDiscoveryService) {}

  async run(page: number): Promise<Movie[]> {

    try {
      this.moviesData = await this.moviesService.moviesDiscovery(page);
    } catch (e) {
      throw new Error(e);
    }
    return this.moviesData;
  }
}
