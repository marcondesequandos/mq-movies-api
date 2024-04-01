import User from "@/application/entities/user/user";
import Id from "@/application/entities/value-object/id.value-object";
import { ListModel } from "@/application/models/user";
import { UserModel } from "@/infra/modules/repositories/user/user.model";

export class AddUserViewModel {
  id: Id;
  name: string;
  email: string;
  lists: ListModel
}

static map(user: UserModel): AddUserViewModel {
  const userModel = new User({
    id: user.id,
    name: user.name,
    email: user.email,
    lists: user.list
  })
}
