import { AddUserUseCaseInterface } from "@/application/contracts/usecases/user/adduser-usecase.interface";
import { User } from "@/application/entities/user/user";
import { AddUserInputDto } from "./add-user.usecase.dto";
import UserRepositoryInterface from "@/infra/modules/repositories/user/user.repository";

export default class AddUserUseCase implements AddUserUseCaseInterface {
  constructor(private readonly userRepository: UserRepositoryInterface) {}
  async run(data: AddUserInputDto): Promise<User> {
    const user = this.createUser(data);
    await this.userRepository.create(user);

    return user;
  }

  private createUser(input: AddUserInputDto): User {
    return new User({

    })
  }
}
