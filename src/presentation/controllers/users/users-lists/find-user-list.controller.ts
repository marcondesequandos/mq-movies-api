import { FindUserListUseCaseInterface } from "@/application/contracts/usecases/users/users-lists/find-user-list.usecase.interface";
import { NotFoundError } from "@/application/errors/users/user-not-found.error";
import { HttpController } from "@/presentation/contracts/Controller";
import { HttpResponse, notFound, ok } from "@/presentation/contracts/Http";
import { FindUserListViewModel } from "@/presentation/view-models/users/users-lists/find-user-list.view-model";

export class FindUserListController implements HttpController {
  constructor(private readonly usecase: FindUserListUseCaseInterface) {}
  async handle(input: number): Promise<HttpResponse<FindUserListViewModel>> {
    try {
      const userList = await this.usecase.run(input);
      const response = FindUserListViewModel.map(userList);
      return ok(response);
    } catch (e) {
      console.error("Error finding UserList", e);
      if (e instanceof NotFoundError) return notFound(e.message);
    }
  }
}
