import User from "@/application/entities/user/user";

export interface UserGateway {
  add(user: User): Promise<void>;
  find(id: string): Promise<User>;
}
