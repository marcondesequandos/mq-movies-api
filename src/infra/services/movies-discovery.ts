import { DiscoverService } from "application/contracts/services/discover-service.interface";
import axios, { AxiosResponse } from "axios";
import { Movie } from "domain/entities/movie";
import { config } from "../config/config";

export class MoviesDiscoveryService implements DiscoverService {
  async moviesDiscovery(): Promise<Movie[]> {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=2&sort_by=popularity.desc&with_runtime.lte=400`;

    //Filtros para trabalhar:

    // includeAdult
    // includeVideo
    // page
    // sort_by (popularity, revenue, primary_release_date, vote_average, vote_count asc & desc)
    // language
    // with_original_language
    // incluir mais com o tempo

    const response: AxiosResponse = await axios({
      url,
      method: "get",
      timeout: 8000,
      headers: {
        accept: "application/json",
        Authorization: config.token,
      },
    });

    return response.data.results;
  }
}
