import { AddListItemUseCaseInterface } from "@/application/contracts/usecases/user/add-list-item.usecase.interface";
import AddListItemUseCase from "@/application/usecases/user/list-item/add-list-item/add-list-item.usecase";
import { AddListItemInputDto } from "@/main/dtos/users/add-list-item.dto";
import { HttpController } from "@/presentation/contracts/Controller";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "@/presentation/contracts/Http";
import { AddListItemViewModel } from "@/presentation/view-models/users/add-list-item.view-model";

export class AddListItemController implements HttpController {
  constructor(private readonly useCase: AddListItemUseCaseInterface) {}
  async handle(
    input: AddListItemInputDto
  ): Promise<HttpResponse<AddListItemViewModel>> {
    try {
      const listItem = await this.useCase.run(input);
      const response = AddListItemViewModel.map(listItem);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
