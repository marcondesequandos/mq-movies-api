import { ListUsersUseCaseInterface } from "@/application/contracts/usecases/users/list-users.usecase.interface";
import User from "@/application/entities/user/user";
import UserRepositoryInterface from "@/infra/repositories/contracts/user.repository-contract";

export class ListUsersUsecase implements ListUsersUseCaseInterface {
  constructor(private readonly _userRepository: UserRepositoryInterface) {}
  async run(): Promise<User[]> {
    return this._userRepository.list();
  }
}
