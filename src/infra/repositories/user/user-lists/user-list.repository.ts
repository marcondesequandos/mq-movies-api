import UserList, { ListType } from '@/application/entities/user/user-list';
import { UserListModel, MovieModel, TvShowModel } from '..';
import Movie from '@/application/entities/user/movie';
import TvShow from '@/application/entities/user/tv-show';
import { NotFoundError } from '@/application/errors/users/user-not-found.error';
import UserListRepositoryInterface from '../../contracts/user-list.repository-contract';

export default class UserListRepository implements UserListRepositoryInterface {
  async create(userList: UserList): Promise<UserList> {
    try {
      const createdUserList = await UserListModel.create({
        name: userList.name,
        description: userList.description,
        type: userList.type,
      });

      return createdUserList.toJSON();
    } catch (e) {
      console.log('Error creating UserList:', e);
    }
  }
  async find(id: number): Promise<UserList> {
    try {
      const listFromDb = await UserListModel.findOne({
        where: { lists_id: id },
      });

      const moviesList = listFromDb.type === 'movies';

      const items = moviesList
        ? await MovieModel.findAll({
            where: { lists_id: listFromDb.id },
          })
        : await TvShowModel.findAll({
            where: { lists_id: listFromDb.id },
          });

      const list = new UserList({
        id: listFromDb.id,
        name: listFromDb.name,
        type: moviesList ? ListType.MOVIE : ListType.TV,
        description: listFromDb.description,
        items: moviesList
          ? items.map(
              (movie) =>
                new Movie({
                  id: movie.id,
                  backdrop_path: movie.backdrop_path,
                  original_language: movie.original_language,
                  original_title: movie.original_title,
                  poster_path: movie.poster_path,
                  release_date: movie.release_date,
                  title: movie.title,
                  vote_average: movie.vote_average,
                })
            )
          : items.map(
              (tv) =>
                new TvShow({
                  id: tv.id,
                  backdrop_path: tv.backdrop_path,
                  original_language: tv.original_language,
                  original_name: tv.original_name,
                  poster_path: tv.poster_path,
                  first_air_date: tv.first_air_date,
                  name: tv.name,
                  vote_average: tv.vote_average,
                })
            ),
      });

      return list;
    } catch (e) {
      throw new NotFoundError('UserList');
    }
  }
}
