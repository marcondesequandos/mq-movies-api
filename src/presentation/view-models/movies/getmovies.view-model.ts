import { GenreId } from "@/application/entities/movie/genres_id";
import { Movie } from "@/application/entities/movie/movie";

export class GetMoviesViewModel {
  adult: boolean;
  backdrop_path: string;
  genre_ids: GenreId[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  static map(movies: Movie[]): GetMoviesViewModel[] {
    const moviesModel = movies.map((movie) => {
      return {
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids,
        id: movie.id,
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        title: movie.title,
        video: movie.video,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      };
    });

    return moviesModel;
  }
}
