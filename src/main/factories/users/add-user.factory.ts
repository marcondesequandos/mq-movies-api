import AddUserUseCase from "@/application/usecases/users/add-user/add-user.usecase";
import UserRepository from "@/infra/repositories/user/user.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { AddUserController } from "@/presentation/controllers/users/add-user.controller";

export const makeAddUser = (): Controller => {
  const userRepository = new UserRepository();
  const addUserUseCase = new AddUserUseCase(userRepository);
  return new AddUserController(addUserUseCase);
};
