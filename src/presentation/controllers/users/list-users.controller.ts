import { ListUsersUseCaseInterface } from "@/application/contracts/usecases/users/list-users.usecase.interface";
import { HttpController } from "@/presentation/contracts/Controller";
import { ListUsersViewModel } from "@/presentation/view-models/users/list-users.view-model";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "@/presentation/contracts/Http";

export class ListUsersController implements HttpController {
  constructor(private readonly useCase: ListUsersUseCaseInterface) {}
  async handle(): Promise<HttpResponse<ListUsersViewModel>> {
    try {
      const users = await this.useCase.run();
      const response = ListUsersViewModel.map(users);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
