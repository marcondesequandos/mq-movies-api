import { FindUserListUseCaseInterface } from "@/application/contracts/usecases/users/users-lists/find-user-list.usecase.interface";
import UserList from "@/application/entities/user/user-list";
import { NotFoundError } from "@/application/errors/users/user-not-found.error";
import ListRepositoryInterface from "@/infra/repositories/contracts/list.repository-contract";

export class FindUserListUseCase implements FindUserListUseCaseInterface {
  constructor(private readonly _listRepository: ListRepositoryInterface) {}
  async run(id: number): Promise<UserList> {
    const userList = this._listRepository.find(id);

    if (!userList) throw new NotFoundError("UserList");

    return userList;
  }
}
