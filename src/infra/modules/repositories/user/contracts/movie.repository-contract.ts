import Movie from "@/application/entities/user/movie";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";

export default interface MovieRepositoryInterface {
  create(listItem: AddMovieInputDto): Promise<Movie>;
}
