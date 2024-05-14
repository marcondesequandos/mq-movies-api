import { FindUserUseCaseInterface } from "@/application/contracts/usecases/users/find-user-usecase.interface";
import User from "@/application/entities/user/user";
import { UserNotFoundError } from "@/application/errors/users/user-not-found.error";
import UserRepositoryInterface from "@/infra/repositories/contracts/user.repository-contract";

export class FindUserUseCase implements FindUserUseCaseInterface {
  constructor(private readonly _userRepository: UserRepositoryInterface) {}
  async run(id: number): Promise<User> {
    const user = this._userRepository.find(id);

    if (!user) throw new UserNotFoundError();

    return user;
  }
}
