import { FindUserUseCase } from "@/application/usecases/users/find-user.usecase";
import UserRepository from "@/infra/repositories/user/user.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { FindUserController } from "@/presentation/controllers/users/find-user.controller";

export const makeFindUser = (): Controller => {
  const userRepository = new UserRepository();
  const findUserUseCase = new FindUserUseCase(userRepository);
  return new FindUserController(findUserUseCase);
};
