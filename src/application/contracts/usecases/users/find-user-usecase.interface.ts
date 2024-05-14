import User from "@/application/entities/user/user";

export interface FindUserUseCaseInterface {
  run(id: number): Promise<User>;
}
