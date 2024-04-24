import { MovieModel } from "./movie.model";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";
import MovieRepositoryInterface from "./contracts/movie.repository-contract";
import Movie from "@/application/entities/user/movie";
import { createMovie } from "@/application/helpers/create-entity/create-movie.helper";

export default class ListItemRepository implements MovieRepositoryInterface {
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
        created_at: input.createdAt,
        updated_at: input.updatedAt,
      });

      const movie = createMovie.run(movieFromDb);

      return movie;
    } catch (e) {
      console.log("Error creating ListItem: ", e);
    }
  }
}
