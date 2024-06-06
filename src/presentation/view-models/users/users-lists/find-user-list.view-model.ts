import UserList from "@/application/entities/user/user-list";
import Movie from "@/application/entities/user/movie";
import TvShow from "@/application/entities/user/tv-show";

export class FindUserListViewModel {
  id?: number;
  name?: string;
  type?: string;
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
  static map(list: UserList | null): FindUserListViewModel {
    if (!list) return {};

    const listModel = {
      id: list.id,
      name: list.name,
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
  // static map(list: UserList | null): FindListViewModel {
  //   if (!list) return {};

  //   const listModel = {
  //     id: list.id,
  //     name: list.name,
  //     type: list.type,
  //     items: list.items.map((item) => {
  //       const commonProperties = {
  //         id: item.id,
  //         backdrop_path: item.backdrop_path,
  //         original_language: item.original_language,
  //       };

  //       if (list.type === "movies") {
  //         const movieItem = item as Movie;
  //         return {
  //           ...commonProperties,
  //           title: movieItem.title,
  //           original_title: movieItem.original_title,
  //           release_date: movieItem.release_date,
  //         };
  //       } else if (list.type === "tv_shows") {
  //         const tvShowItem = item as TvShow;
  //         return {
  //           ...commonProperties,
  //           name: tvShowItem.name,
  //           original_name: tvShowItem.original_name,
  //           first_air_date: tvShowItem.first_air_date,
  //         };
  //       }
  //       return commonProperties;
  //     }),
  //     created_at: list.created_at,
  //     updated_at: list.updated_at,
  //   };
  //   return listModel;
  // }
}
