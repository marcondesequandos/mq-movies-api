import { Movie } from "@/application/entities/movie/movie";

export type MovieParams = {
  type?: string;
  page?: number;
  woLanguage: string;
  sort_by?: string;
  include_adult?: string;
  vote_count_gte?: number;
};
export interface DiscoverService {
  moviesDiscovery({
    type,
    page,
    woLanguage,
    sort_by,
    include_adult,
    vote_count_gte,
  }: MovieParams): Promise<Movie[]>;
}
