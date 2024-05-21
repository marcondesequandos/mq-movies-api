import List from "@/application/entities/user/list";

export default interface ListRepositoryInterface {
  create(list: List): Promise<List>;
  find(id: number): Promise<List>;
}
