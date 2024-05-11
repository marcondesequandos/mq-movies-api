import User from "@/application/entities/user/user";

export interface ListUsersUseCaseInterface {
  run: () => Promise<User[]>;
}
