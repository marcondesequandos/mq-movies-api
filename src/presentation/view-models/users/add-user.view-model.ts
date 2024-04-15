import List from "@/application/entities/user/list";
import ListItem from "@/application/entities/user/list-item";
import User from "@/application/entities/user/user";
import { AddUserOutputDto } from "@/application/usecases/user/add-user/add-user.usecase.dto";

export class AddUserViewModel {
  id?: number;
  name?: string;
  email?: string;
  lists?: List[];

  static map(user: AddUserOutputDto): AddUserViewModel {
    if (!user) return {};

    const userModel = new User({
      name: user.name,
      email: user.email,
      lists: user.lists.map(
        (list) =>
          new List({
            id: list.id,
            name: list.name,
            type: list.type,
          })
      ),
    });
    return userModel;
  }
}
