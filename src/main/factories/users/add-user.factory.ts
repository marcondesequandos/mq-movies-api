import AddUserUseCase from "@/application/usecases/user/add-user/add-user.usecase";
import UserRepository from "@/infra/modules/repositories/user/user.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { AddUserController } from "@/presentation/controllers/users/add-user.controller";

export const makeAddUser = (): Controller => {
  const userRepository = new UserRepository();
  const userUseCase = new AddUserUseCase(userRepository);
  return new AddUserController(userUseCase);
};
