import Movie from "@/application/entities/user/movie";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";

export class createMovie {
  static run(input: AddMovieInputDto): Movie {
    return new Movie({
      backdrop_path: input.backdrop_path,
      original_language: input.original_language,
      original_title: input.original_title,
      poster_path: input.poster_path,
      release_date: input.release_date,
      title: input.title,
      vote_average: input.vote_average,
    });
  }
}
