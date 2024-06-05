import { FindUserListUseCase } from "@/application/usecases/users/users-lists/find-user-list.usecase";
import UserListRepository from "@/infra/repositories/user/user-lists/list.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { FindUserListController } from "@/presentation/controllers/users/users-lists/find-user-list.controller";

export const makeFindUserList = (): Controller => {
  const userListRepository = new UserListRepository();
  const findUserListUseCase = new FindUserListUseCase(userListRepository);
  return new FindUserListController(findUserListUseCase);
};
