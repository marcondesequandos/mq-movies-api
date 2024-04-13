import { AddUserUseCaseInterface } from "@/application/contracts/usecases/user/adduser-usecase.interface";
import User from "@/application/entities/user/user";
import { AddUserInputDto } from "./add-user.usecase.dto";
import UserRepositoryInterface from "@/infra/modules/repositories/user/user.repository";
import ListItem from "@/application/entities/user/list-item";
import List from "@/application/entities/user/list";

export default class AddUserUseCase implements AddUserUseCaseInterface {
  constructor(private readonly _userRepository: UserRepositoryInterface) {}
  async run(data: AddUserInputDto): Promise<User> {
    console.log("usecase run called");
    const user = this.createUser(data);
    console.log("createdUser =>", user);
    await this._userRepository.create(user);

    return user;
  }

  private createUser(input: AddUserInputDto): User {
    return new User({
      name: input.name,
      email: input.email,
      lists: input.lists.map(
        (list) =>
          new List({
            name: list.name,
            type: list.type,
          })
      ),
    });
  }
}
