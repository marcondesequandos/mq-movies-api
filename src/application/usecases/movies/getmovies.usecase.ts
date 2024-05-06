import { Movie } from "@/application/entities/movie/movie";
import { MovieParams } from "@/application/contracts";

import { MoviesDiscoveryService } from "infra/services/movies-discovery";
import { GetMoviesUsecaseInterface } from "@/application/contracts";

export class GetMoviesUsecase implements GetMoviesUsecaseInterface {
  private moviesData: Movie[];
  constructor(private readonly moviesService: MoviesDiscoveryService) {}

  async run({
    type,
    page,
    woLanguage,
    sort_by,
    include_adult,
    vote_count_gte,
  }: MovieParams): Promise<Movie[]> {
    this.moviesData = await this.moviesService.moviesDiscovery({
      type,
      page,
      woLanguage,
      sort_by,
      include_adult,
      vote_count_gte,
    });

    return this.moviesData;
  }
}
