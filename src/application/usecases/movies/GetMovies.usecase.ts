import { Movie } from "domain/entities/movie";
import { GetMovies } from "domain/usecases/GetMovies";
import { MoviesDiscoveryService } from "infra/services/movies-discovery";
import { internalServerError } from "presentation/contracts/Http";

export class GetMoviesUsecase implements GetMovies {
  private moviesData: Movie[];
  constructor(private readonly moviesService: MoviesDiscoveryService) {}

  async run(page: number): Promise<Movie[]> {
    try {
      this.moviesData = await this.moviesService.moviesDiscovery(page);
    } catch (e: any) {
      throw new Error(e);
    }
    return this.moviesData;
  }
}
