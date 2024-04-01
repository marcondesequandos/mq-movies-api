import { GetMoviesUsecaseInterface } from "application/contracts";

import { HttpController } from "presentation/contracts/Controller";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "presentation/contracts/Http";
import { GetMoviesViewModel } from "presentation/view-models/movies/getmovies.view-model";

export type GetMoviesParams = {
  page;
  woLanguage;
  sort_by;
  include_adult;
};

export class GetMoviesController implements HttpController {
  constructor(private readonly useCase: GetMoviesUsecaseInterface) {}
  async handle({
    page,
    woLanguage,
    sort_by,
    include_adult,
  }: GetMoviesParams): Promise<HttpResponse<GetMoviesViewModel[]>> {
    try {
      const moviesData = await this.useCase.run({
        page,
        woLanguage,
        sort_by,
        include_adult,
      });
      const response = GetMoviesViewModel.map(moviesData);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
