import { AddUserUseCaseInterface } from "@/application/contracts/usecases/user/adduser-usecase.interface";
import User from "@/application/entities/user/user";
import { AddUserInputDto, AddUserOutputDto } from "./add-user.usecase.dto";
import UserRepositoryInterface from "@/infra/modules/repositories/user/user.repository";
import ListItem from "@/application/entities/user/list-item";
import List from "@/application/entities/user/list";

export default class AddUserUseCase implements AddUserUseCaseInterface {
  constructor(private readonly _userRepository: UserRepositoryInterface) {}
  async run(data: AddUserInputDto): Promise<AddUserOutputDto> {
    const user = this.createUser(data);
    await this._userRepository.create(user);

    return this.toOutputDto(user);
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

  private toOutputDto(input: User): AddUserOutputDto {
    return {
      name: input.name,
      email: input.email,
      lists: input.lists.map((list: any) => ({
        name: list.name,
        type: list.type,
        items: list.items.map((item: any) => ({
          adult: item.adult,
          backdrop_path: item.backdrop_path,
          original_language: item.original_language,
          original_title: item.original_title,
          overview: item.overview,
          popularity: item.popularity,
          poster_path: item.poster_path,
          release_date: item.release_date,
          title: item.title,
          vote_average: item.vote_average,
          vote_count: item.vote_count,
        })),
      })),
    };
  }
}
