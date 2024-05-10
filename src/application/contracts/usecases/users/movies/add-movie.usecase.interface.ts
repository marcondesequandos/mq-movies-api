import Movie from "@/application/entities/user/movie";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";

export interface AddMovieUseCaseInterface {
  run(data: AddMovieInputDto): Promise<Movie>;
}
