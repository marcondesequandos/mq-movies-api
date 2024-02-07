import { DiscoverService } from "@/application/contracts";
import axios, { AxiosResponse } from "axios";
import { Movie } from "@/domain/entities/movie";
import { config } from "@/config/config";

export class MoviesDiscoveryService implements DiscoverService {
  private movies: Movie[];
  async moviesDiscovery(page: number): Promise<Movie[]> {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc`;

    //Filtros para trabalhar:

    // includeAdult
    // includeVideo
    // page
    // sort_by (popularity, revenue, primary_release_date, vote_average, vote_count asc & desc)
    // language
    // with_original_language
    // incluir mais com o tempo

    const { data }: AxiosResponse = await axios({
      url,
      method: "get",
      timeout: 8000,
      headers: {
        accept: "application/json",
        Authorization: config.token,
      },
    });

    const { results } = data;

    this.movies = results;

    return this.movies;
  }
}
