import { Movie } from "domain/entities/movie";

export interface DiscoverService {
  moviesDiscovery(page: number): Promise<Movie[]>;
}
