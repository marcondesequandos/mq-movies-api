import UserList from "@/application/entities/user/user-list";

export default interface UserListRepositoryInterface {
  create(list: UserList): Promise<UserList>;
  find(id: number): Promise<UserList>;
}
