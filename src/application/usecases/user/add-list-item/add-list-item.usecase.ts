import { AddListItemUseCaseInterface } from "@/application/contracts/usecases/user/add-list-item.usecase.interface";
import ListItem from "@/application/entities/user/list-item";
import ListItemRepositoryInterface from "@/infra/modules/repositories/user/contracts/list-item.repository-contract";
import { AddListItemInputDto } from "@/main/dtos/users/add-list-item.dto";

export default class AddListItemUseCase implements AddListItemUseCaseInterface {
  constructor(
    private readonly _addListItemRepository: ListItemRepositoryInterface
  ) {}
  async run(data: AddListItemInputDto): Promise<ListItem> {
    const listItem = this.createListItem(data);

    data.createdAt = listItem.createdAt;
    data.updatedAt = listItem.updatedAt;

    const createdListItem = await this._addListItemRepository.create(data);
    if (!createdListItem) throw Error("Failed to create ListItem");

    return listItem;
  }

  private createListItem(input: AddListItemInputDto): ListItem {
    return new ListItem({
      adult: input.adult,
      backdrop_path: input.backdrop_path,
      original_language: input.original_language,
      original_title: input.original_title,
      original_name: input.original_name,
      overview: input.overview,
      popularity: input.popularity,
      poster_path: input.poster_path,
      release_date: input.release_date,
      first_air_date: input.first_air_date,
      title: input.title,
      video: input.video,
      vote_average: input.vote_average,
      vote_count: input.vote_count,
    });
  }
}
