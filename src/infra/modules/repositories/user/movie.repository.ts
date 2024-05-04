import { MovieModel } from "./movie.model";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";
import MovieRepositoryInterface from "./contracts/movie.repository-contract";
import Movie from "@/application/entities/user/movie";

export default class MovieRepository implements MovieRepositoryInterface {
  async create(input: AddMovieInputDto): Promise<Movie> {
    try {
      const movieFromDb = await MovieModel.create({
        lists_id: input.lists_id,
        backdrop_path: input.backdrop_path,
        original_language: input.original_language,
        original_title: input.original_title,
        poster_path: input.poster_path,
        release_date: input.release_date,
        title: input.title,
        vote_average: input.vote_average,
      });

      const movie = movieFromDb.toJSON();

      return movie;
    } catch (e) {
      console.log("Error creating Movie: ", e);
    }
  }
}
