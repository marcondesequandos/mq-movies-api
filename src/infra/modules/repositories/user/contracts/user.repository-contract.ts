import User from "@/application/entities/user/user";

export default interface UserRepositoryInterface {
  create(user: User): Promise<User>;
  find(id: string): Promise<User>;
  list(): Promise<User[]>;
  update(user: User): Promise<User | null>;
}
