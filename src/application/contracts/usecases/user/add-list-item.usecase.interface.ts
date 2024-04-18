import ListItem from "@/application/entities/user/list-item";
import { AddListItemInputDto } from "@/main/dtos/users/add-list-item.dto";

export interface AddListItemUseCaseInterface {
  run(data: AddListItemInputDto): Promise<ListItem>;
}
