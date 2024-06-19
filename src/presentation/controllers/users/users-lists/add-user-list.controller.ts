import UserList, { ListType } from '@/application/entities/user/user-list';
import { HttpController } from '@/presentation/contracts/Controller';
import {
  HttpResponse,
  internalServerError,
  ok,
} from '@/presentation/contracts/Http';
import { AddUserListViewModel } from '@/presentation/view-models/users/users-lists/add-user-list.view-model';

export class AddUserListController implements HttpController {
  constructor(private readonly useCase: AddUserListUseCaseInterface) {}

  async handle(
    input: AddUserListInputDto
  ): Promise<HttpResponse<AddUserListViewModel>> {
    try {
      const userList = await this.useCase.run(input);
      const response = AddUserListViewModel.map(userList);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
