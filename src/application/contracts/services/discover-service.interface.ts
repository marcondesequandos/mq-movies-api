import { Movie } from "domain/entities/movie";

export interface DiscoverService {
  moviesDiscovery(): Promise<Movie[]>;
}
