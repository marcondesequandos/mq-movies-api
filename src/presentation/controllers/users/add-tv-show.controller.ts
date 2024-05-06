import { AddTvShowUseCaseInterface } from "@/application/contracts/usecases/user/add-tv-show.usecase.interface";
import { AddTvShowInputDto } from "@/main/dtos/users/add-tv-show.dto";
import { HttpController } from "@/presentation/contracts/Controller";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "@/presentation/contracts/Http";
import { AddTvShowViewModel } from "@/presentation/view-models/users/add-tv-show.view-model";

export class AddTvShowController implements HttpController {
  constructor(private readonly useCase: AddTvShowUseCaseInterface) {}
  async handle(
    input: AddTvShowInputDto
  ): Promise<HttpResponse<AddTvShowViewModel>> {
    try {
      const tvShow = await this.useCase.run(input);
      const response = AddTvShowViewModel.map(tvShow);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
