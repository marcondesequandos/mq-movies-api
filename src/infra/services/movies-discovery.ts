import { DiscoverService } from "@/application/contracts";
import { MovieParams } from "@/application/contracts";
import { Movie } from "@/application/entities/movie/movie";
import axios, { AxiosResponse } from "axios";

export class MoviesDiscoveryService implements DiscoverService {
  private movies: Movie[];
  async moviesDiscovery({
    type,
    page,
    woLanguage,
    sort_by,
    include_adult,
    vote_count_gte,
  }: MovieParams): Promise<Movie[]> {
    const url = this.getUrl({
      type,
      page,
      sort_by,
      include_adult,
      vote_count_gte,
      woLanguage,
    });

    //Filtros para trabalhar:

    // includeAdult
    // includeVideo
    // page
    // sort_by (popularity, revenue, primary_release_date, vote_average, vote_count asc & desc)
    // with_original_language
    // vote count gte

    const { data }: AxiosResponse = await axios({
      url,
      method: "get",
      timeout: 8000,
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    });

    const { results } = data;

    this.movies = woLanguage
      ? this.woLanguageFilter(woLanguage, results)
      : results;

    return this.movies;
  }

  // método para remover idioma

  private woLanguageFilter = async (language: string, moviesData: Movie[]) => {
    const woLanguage = moviesData.filter(
      (movie: Movie) => movie.original_language !== "en"
    );

    return woLanguage;
  };

  private getUrl = (config: MovieParams): string => {
    const params: Record<string, any> = {};
    for (const key in config) {
      if (config[key]) {
        params[key] = config[key];
      }
    }

    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");

    return `${process.env.API_URL}/${config.type}?${queryString}`;
  };
}
