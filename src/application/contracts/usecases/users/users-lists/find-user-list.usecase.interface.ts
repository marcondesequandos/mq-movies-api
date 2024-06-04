import List from "@/application/entities/user/list";

export interface FindUserListUseCaseInterface {
  run(id: number): Promise<List>;
}
