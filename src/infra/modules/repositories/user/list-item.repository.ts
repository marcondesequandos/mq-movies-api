import ListItem from "@/application/entities/user/list-item";
import ListItemRepositoryInterface from "./contracts/list-item.repository-contract";
import { ListItemModel } from "./list-item.model";
import {
  AddListItemInputDto,
  AddListItemOutputDto,
} from "@/main/dtos/users/add-list-item.dto";

export default class ListItemRepository implements ListItemRepositoryInterface {
  async create(input: AddListItemInputDto): Promise<AddListItemOutputDto> {
    try {
      console.log("users_id =>", input.users_id);
      const listItem = await ListItemModel.create({
        lists_id: input.lists_id,
        users_id: input.users_id,
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
        created_at: input.createdAt,
        updated_at: input.updatedAt,
      });

      return listItem;
    } catch (e) {
      console.log("Error creating ListItem: ", e);
    }
  }
}
