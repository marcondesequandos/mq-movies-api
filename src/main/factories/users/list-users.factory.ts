import { ListUsersUsecase } from "@/application/usecases/users/list-users.usecase";
import UserRepository from "@/infra/repositories/user/user.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { ListUsersController } from "@/presentation/controllers/users/list-users.controller";

export const makeListUsers = (): Controller => {
  const userRepository = new UserRepository();
  const listUsersUseCase = new ListUsersUsecase(userRepository);
  return new ListUsersController(listUsersUseCase);
};
