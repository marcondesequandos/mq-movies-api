import User from "@/application/entities/user/user";
import UserRepositoryInterface from "./contracts/user.repository-contract";
import { UserModel } from "./user.model";
import List, { ListType } from "@/application/entities/user/list";
import { ListModel } from "./list.model";

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
  list(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
