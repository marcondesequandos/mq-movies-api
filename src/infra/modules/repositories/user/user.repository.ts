import User from "@/application/entities/user/user";
import UserRepositoryInterface from "./contracts/user.repository-contract";
import { UserModel } from "./user.model";
import List from "@/application/entities/user/list";
import { ListModel } from "./list.model";

export default class UserRepository implements UserRepositoryInterface {
  async create(user: User): Promise<void> {
    console.log("repository called");
    console.log(user.createdAt);
    const createdUser = await UserModel.create({
      name: user.name,
      email: user.email,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    });

    await Promise.all(
      user.lists.map((list: List) =>
        ListModel.create({
          users_id: createdUser.id,
          name: list.name,
          type: list.type,
          created_at: user.createdAt,
          updated_at: user.updatedAt,
        })
      )
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
