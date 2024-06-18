import { AddUserUseCaseInterface } from "@/application/contracts/usecases/users/add-user-usecase.interface";
import User from "@/application/entities/user/user";
import { AddUserInputDto } from "../../../main/dtos/users/add-user.dto";
import UserRepositoryInterface from "@/infra/repositories/user/user.repository";
import UserList, { ListType } from "@/application/entities/user/user-list";

export default class AddUserUseCase implements AddUserUseCaseInterface {
  constructor(private readonly _userRepository: UserRepositoryInterface) {}
  async run(data: AddUserInputDto): Promise<User> {
    const user = this.createUserWithDefaultLists(data);
    const userFromDb = await this._userRepository.create(user);

    return userFromDb;
  }

  private createUserWithDefaultLists(input: AddUserInputDto): User {
    return new User({
      name: input.name,
      email: input.email,
      lists: [
        new UserList({ name: "Filmes assistidos", description: `Filmes assistidos por ${input.name}`, type: ListType.MOVIE }),
        new UserList({ name: "Séries assistidas", description: `Séries assistidas por ${input.name}`, type: ListType.TV }),
      ],
    });
  }
}
