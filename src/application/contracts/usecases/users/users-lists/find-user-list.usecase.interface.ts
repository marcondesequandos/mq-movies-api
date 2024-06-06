import UserList from "@/application/entities/user/user-list";

export interface FindUserListUseCaseInterface {
  run(id: number): Promise<UserList>;
}
