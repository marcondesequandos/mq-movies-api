import { GetMoviesUsecase } from "application/contracts";

import { HttpController } from "presentation/contracts/Controller";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "presentation/contracts/Http";
import { GetMoviesViewModel } from "presentation/view-models/GetMovies.view-model";

export class GetMoviesController implements HttpController {
  constructor(private readonly useCase: GetMoviesUsecase) {}
  async handle(page: number): Promise<HttpResponse<GetMoviesViewModel[]>> {
    try {
      const moviesData = await this.useCase.run(page);
      const response = GetMoviesViewModel.map(moviesData);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
