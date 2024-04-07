import User from "@/application/entities/user/user";
import UserRepositoryInterface from "./contracts/user.repository-contract";
import { UserModel } from "./user.model";
import List from "@/application/entities/user/list";
import ListItem from "@/application/entities/user/list-item";
import { ListItemModel } from "./list-item.model";
import { ListModel } from "./list.model";

export default class UserRepository implements UserRepositoryInterface {
  async create(user: User): Promise<void> {
    await UserModel.create(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        lists: user.lists.map((list: List) => ({
          id: list.id,
          name: list.name,
          type: list.type,
          items: list.items.map((item: ListItem) => ({
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
          })),
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })),
      },
      {
        include: [ListModel, ListItemModel],
      }
    );
  }
  find(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
