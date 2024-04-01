import { FindUserUsecaseInterface } from "@/application/contracts/usecases/user/finduser-usecase.interface";
import User from "@/application/entities/user/user";
import UserRepositoryInterface from "@/infra/modules/repositories/user/user.repository";
import { FindUserUseCaseInputDTO } from "./find-user.usecase.dto";
import Id from "@/application/entities/value-object/id.value-object";
import List from "@/application/entities/user/list";
import ListItem from "@/application/entities/user/list-item";

export default class FindUserUseCase implements FindUserUsecaseInterface {
  constructor(private readonly _userRepository: UserRepositoryInterface) {}
  async run(input: FindUserUseCaseInputDTO): Promise<User> {
    const user = await this._userRepository.find(input.id);

    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      lists: user.lists.map(
        (list) =>
          new List({
            id: list.id,
            name: list.name,
            type: list.type,
            items: list.items.map(
              (item) =>
                new ListItem({
                  adult: item.adult,
                  backdrop_path: item.backdrop_path,
                  id: item.id,
                  original_language: item.original_language,
                  original_title: item.original_title,
                  overview: item.overview,
                  popularity: item.popularity,
                  poster_path: item.poster_path,
                  release_date: item.release_date,
                  title: item.title,
                  vote_average: item.vote_average,
                  vote_count: item.vote_count,
                })
            ),
          })
      ),
    });
  }
}
