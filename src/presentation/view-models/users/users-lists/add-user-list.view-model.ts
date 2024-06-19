import Movie from "@/application/entities/user/movie";
import TvShow from "@/application/entities/user/tv-show";
import UserList from "@/application/entities/user/user-list";

export class AddUserListViewModel {
  id?: number;
  name?: string;
  type?: string;
  description?: string;
  items?: {
    id?: number;
    backdrop_path?: string;
    original_language?: string;
    original_title?: string;
    original_name?: string;
    poster_path?: string;
    release_date?: string;
    first_air_date?: string;
    title?: string;
    name?: string;
    vote_average?: number;
  }[];
  created_at?: Date;
  updated_at?: Date;
  static map(list: UserList | null): AddUserListViewModel {
    if (!list) return {};

    const listModel = {
      id: list.id,
      name: list.name,
      description: list.description,
      type: list.type,
      items: list.items.map((item) => ({
        id: item.id,
        backdrop_path: item.backdrop_path,
        original_language: item.original_language,
        title: (item as Movie).title,
        original_title: (item as Movie).original_title,
        release_date: (item as Movie).release_date,
        name: (item as TvShow).name,
        original_name: (item as TvShow).original_name,
        first_air_date: (item as TvShow).first_air_date,
      })),
      created_at: list.created_at,
      updated_at: list.updated_at,
    };
    return listModel;
  }
}