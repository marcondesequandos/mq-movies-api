import {
  AddListItemInputDto,
  AddListItemOutputDto,
} from "@/main/dtos/users/add-list-item.dto";

export default interface ListItemRepositoryInterface {
  create(listItem: AddListItemInputDto): Promise<AddListItemOutputDto>;
}
