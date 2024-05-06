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
    const url = this.getUrl(type, page, sort_by, include_adult, vote_count_gte);

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

  private getUrl = (
    type?: string,
    page?: number,
    sort_by?: string,
    include_adult?: string,
    vote_count_gte?: number
  ): string => {
    if (!page && !sort_by && !include_adult && !vote_count_gte) {
      return `${process.env.API_URL}/${type}`;
    } else {
      const params = [];
      if (page) params.push(`page=${page}`);
      if (sort_by) params.push(`sort_by=${sort_by}`);
      if (include_adult) params.push(`include_adult=${include_adult}`);
      if (vote_count_gte) params.push(`vote_count.gte=${vote_count_gte}`);
      return `${process.env.API_URL}/${type}?${params.join("&")}`;
    }
  };
}
