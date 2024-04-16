import { ListType } from "@/application/entities/user/list";
import User from "@/application/entities/user/user";

export class AddUserViewModel {
  id?: number;
  name?: string;
  email?: string;
  lists?: {
    id?: number;
    name: string;
    type: ListType;
  }[];

  static map(user: User): AddUserViewModel {
    if (!user) return {};

    const userModel = {
      name: user.name,
      email: user.email,
      lists: user.lists.map((list) => ({
        id: list.id,
        name: list.name,
        type: list.type,
      })),
    };
    return userModel;
  }
}
