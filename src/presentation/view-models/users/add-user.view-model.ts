import List from "@/application/entities/user/list";
import ListItem from "@/application/entities/user/list-item";
import User from "@/application/entities/user/user";
import Id from "@/application/entities/value-object/id.value-object";

export class AddUserViewModel {
  id?: Id;
  name?: string;
  email?: string;
  lists?: List[];

  static map(user: User): AddUserViewModel {
    if (!user) return {};

    const userModel = new User({
      id: user.id,
      name: user.name,
      email: user.email,
      lists: user.lists.map(
        (list) =>
          new List({
            id: list.id,
            name: list.name,
            type: list.type,
            items: list.items.map(
              (item) =>
                new ListItem({
                  id: item.id,
                  adult: item.adult,
                  backdrop_path: item.backdrop_path,
                  original_language: item.original_language,
                  original_title: item.original_title,
                  original_name: item.original_name,
                  overview: item.overview,
                  popularity: item.popularity,
                  poster_path: item.poster_path,
                  release_date: item.release_date,
                  first_air_date: item.first_air_date,
                  title: item.title,
                  name: item.name,
                  video: item.video,
                  vote_average: item.vote_average,
                  vote_count: item.vote_count,
                })
            ),
          })
      ),
    });
    return userModel;
  }
}
