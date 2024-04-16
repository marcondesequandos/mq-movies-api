import { AddUserUseCaseInterface } from "@/application/contracts/usecases/user/adduser-usecase.interface";
import User from "@/application/entities/user/user";
import { AddUserInputDto } from "../../../../main/dtos/users/add-user.dto";
import UserRepositoryInterface from "@/infra/modules/repositories/user/user.repository";
import List, { ListType } from "@/application/entities/user/list";

export default class AddUserUseCase implements AddUserUseCaseInterface {
  constructor(private readonly _userRepository: UserRepositoryInterface) {}
  async run(data: AddUserInputDto): Promise<User> {
    const user = this.createUser(data);
    await this._userRepository.create(user);

    return user;
  }

  private createUser(input: AddUserInputDto): User {
    return new User({
      name: input.name,
      email: input.email,
      lists: [
        new List({ name: "Filmes assistidos", type: ListType.MOVIE }),
        new List({ name: "Séries assistidas", type: ListType.TV }),
      ],
    });
  }
}
