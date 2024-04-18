import AddListItemUseCase from "@/application/usecases/user/add-list-item/add-list-item.usecase";
import ListItemRepository from "@/infra/modules/repositories/user/list-item.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { AddListItemController } from "@/presentation/controllers/users/add-list-item.controller";

export const makeAddListItem = (): Controller => {
  const listItemRepository = new ListItemRepository();
  const listItemUseCase = new AddListItemUseCase(listItemRepository);
  return new AddListItemController(listItemUseCase);
};
