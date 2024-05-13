import User from "@/application/entities/user/user";
import UserRepositoryInterface from "../contracts/user.repository-contract";
import { UserModel } from "./user.model";
import List, { ListType } from "@/application/entities/user/list";
import { ListModel } from "./list.model";
import { ListUsersViewModel } from "@/presentation/view-models/users/list-users.view-model";

export default class UserRepository implements UserRepositoryInterface {
  async create(user: User): Promise<User> {
    try {
      const createdUser = await UserModel.create({
        name: user.name,
        email: user.email,
      });

      await Promise.all(
        user.lists.map((list: List) =>
          ListModel.create({
            users_id: createdUser.id,
            name: list.name,
            type: list.type,
          })
        )
      );

      return createdUser.toJSON();
    } catch (e) {
      console.log("Error creating User:", e);
    }
  }
  find(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async list(): Promise<User[]> {
    try {
      const usersFromDb = await UserModel.findAll();

      const users = await Promise.all(
        usersFromDb.map(async (user) => {
          const lists = await ListModel.findAll({
            where: { users_id: user.id },
          });

          return new User({
            id: user.id,
            name: user.name,
            email: user.email,
            lists: lists.map(
              (list) =>
                new List({
                  id: list.id,
                  name: list.name,
                  type: list.type === "movies" ? ListType.MOVIE : ListType.TV,
                })
            ),
          });
        })
      );

      return users;
    } catch (e) {
      console.log("Error retrieving Users:", e);
    }
  }
  update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
