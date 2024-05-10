import { AddMovieUseCaseInterface } from "@/application/contracts/usecases/users/movies/add-movie.usecase.interface";
import { AddMovieInputDto } from "@/main/dtos/users/add-movie.dto";
import { HttpController } from "@/presentation/contracts/Controller";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "@/presentation/contracts/Http";
import { AddMovieViewModel } from "@/presentation/view-models/users/movies/add-movie.view-model";

export class AddMovieController implements HttpController {
  constructor(private readonly useCase: AddMovieUseCaseInterface) {}
  async handle(
    input: AddMovieInputDto
  ): Promise<HttpResponse<AddMovieViewModel>> {
    try {
      const movie = await this.useCase.run(input);
      const response = AddMovieViewModel.map(movie);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
