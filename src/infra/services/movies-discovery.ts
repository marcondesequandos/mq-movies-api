import { DiscoverService } from "@/application/contracts";
import { MovieParams } from "@/application/contracts";
import { Movie } from "@/application/entities/movie/movie";

import axios, { AxiosResponse } from "axios";

export class MoviesDiscoveryService implements DiscoverService {
  private movies: Movie[];
  async moviesDiscovery({
    page,
    woLanguage,
    sort_by,
    include_adult,
  }: MovieParams): Promise<Movie[]> {
    const url = this.getUrl(page, sort_by, include_adult);

    //Filtros para trabalhar:

    // includeAdult
    // includeVideo
    // page
    // sort_by (popularity, revenue, primary_release_date, vote_average, vote_count asc & desc)
    // with_original_language

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

  private getUrl = (
    page?: number,
    sort_by?: string,
    include_adult?: string
  ): string => {
    if (!page && !sort_by && !include_adult) {
      return process.env.API_URL;
    } else {
      const params = [];
      if (page) params.push(`page=${page}`);
      if (sort_by) params.push(`sort_by=${sort_by}`);
      if (include_adult) params.push(`include_adult=${include_adult}`);
      return `${process.env.API_URL}?${params.join("&")}`;
    }
  };
}
