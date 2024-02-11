import { Movie } from "@/domain/movie/entity/movie";

export type MovieParams = {
  page?: number;
  woLanguage: string;
  sort_by?: string;
  include_adult?: string;
};
export interface DiscoverService {
  moviesDiscovery({
    page,
    woLanguage,
    sort_by,
    include_adult,
  }: MovieParams): Promise<Movie[]>;
}
