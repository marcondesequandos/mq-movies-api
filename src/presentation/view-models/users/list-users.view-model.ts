import User from "@/application/entities/user/user";

export class ListUsersViewModel {
  id?: number;
  name?: string;
  email?: string;
  lists?: {
    id?: number;
    name?: string;
    description?: string;
  }[];
  created_at?: Date;
  updated_at?: Date;

  static map(users: User[]): ListUsersViewModel[] {
    if (!users.length) return [];

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      lists: user.lists.map((list) => ({
        id: list.id,
        name: list.name,
        description: list.description,
      })),
      created_at: user.created_at,
      updated_at: user.updated_at,
    }));
  }
}
