import { GetMovies } from "@/domain/usecases/getmovies-usecase.interface";
import { Movie } from "domain/entities/movie";
import { MovieParams } from "@/domain/usecases/getmovies-usecase.interface";

import { MoviesDiscoveryService } from "infra/services/movies-discovery";

export class GetMoviesUsecase implements GetMovies {
  private moviesData: Movie[];
  constructor(private readonly moviesService: MoviesDiscoveryService) {}

  async run({
    page,
    woLanguage,
    sort_by,
    include_adult,
  }: MovieParams): Promise<Movie[]> {
    this.moviesData = await this.moviesService.moviesDiscovery({
      page,
      woLanguage,
      sort_by,
      include_adult,
    });

    return this.moviesData;
  }
}
