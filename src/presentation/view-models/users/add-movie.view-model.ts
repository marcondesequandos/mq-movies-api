import Movie from "@/application/entities/user/movie";

export class AddMovieViewModel {
  id?: number;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  poster_path?: string;
  release_date?: string;
  title?: string;
  vote_average?: number;
  createdAt?: Date;
  updatedAt?: Date;

  static map(movie: Movie): AddMovieViewModel {
    if (!movie) return {};

    const movieModel = {
      backdrop_path: movie.backdrop_path,
      original_language: movie.original_language,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      vote_average: movie.vote_average,
    };

    return movieModel;
  }
}
