import { GenreId } from "./genres_id";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: GenreId[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  name: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
