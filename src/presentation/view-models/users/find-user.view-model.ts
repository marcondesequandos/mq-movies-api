import User from "@/application/entities/user/user";

export class FindUserViewModel {
  id?: number;
  name?: string;
  email?: string;
  lists?: {
    id?: number;
    name?: string;
    description?: string;
    type?: string;
  }[];
  created_at?: Date;
  updated_at?: Date;

  static map(user: User | null): FindUserViewModel {
    if (!user) return {};

    const userModel = {
      id: user.id,
      name: user.name,
      email: user.email,
      lists: user.lists.map((list) => ({
        id: list.id,
        name: list.name,
        description: list.description,
        type: list.type,
      })),
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return userModel;
  }
}
