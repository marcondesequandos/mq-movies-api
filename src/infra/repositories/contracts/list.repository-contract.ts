import List from "@/application/entities/user/list";

export default interface UserListRepositoryInterface {
  create(list: List): Promise<List>;
  find(id: number): Promise<List>;
}
