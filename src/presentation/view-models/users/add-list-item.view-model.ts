import ListItem from "@/application/entities/user/list-item";

export class AddListItemViewModel {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  createdAt?: Date;
  updatedAt?: Date;

  static map(listItem: ListItem): AddListItemViewModel {
    if (!listItem) return {};

    const listItemModel = {
      adult: listItem.adult,
      backdrop_path: listItem.backdrop_path,
      original_language: listItem.original_language,
      original_title: listItem.original_title,
      original_name: listItem.original_name,
      overview: listItem.overview,
      popularity: listItem.popularity,
      poster_path: listItem.poster_path,
      release_date: listItem.release_date,
      first_air_date: listItem.first_air_date,
      title: listItem.title,
      video: listItem.video,
      vote_average: listItem.vote_average,
      vote_count: listItem.vote_count,
    };

    return listItemModel;
  }
}
