import { ListType } from "@/application/entities/user/list";
import User from "@/application/entities/user/user";

export class AddUserViewModel {
  id?: number;
  name?: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;

  static map(user: User): AddUserViewModel {
    if (!user) return {};

    const userModel = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
    return userModel;
  }
}
