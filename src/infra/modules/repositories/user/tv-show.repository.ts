import { AddTvShowInputDto } from "@/main/dtos/users/add-tv-show.dto";
import TvShowRepositoryInterface from "./contracts/tv-show.repository-contract";
import TvShow from "@/application/entities/user/tv-show";
import { TvShowModel } from "./tv-show.model";

export default class TvShowRepository implements TvShowRepositoryInterface {
  async create(input: AddTvShowInputDto): Promise<TvShow> {
    try {
      const tvShowFromDb = await TvShowModel.create({
        lists_id: input.lists_id,
        backdrop_path: input.backdrop_path,
        original_language: input.original_language,
        original_name: input.original_name,
        poster_path: input.poster_path,
        first_air_date: input.first_air_date,
        name: input.name,
        vote_average: input.vote_average,
      });
      const tvShow = tvShowFromDb.toJSON();

      return tvShow;
    } catch (e) {
      console.log("Error creating Tv Show", e);
    }
  }
}
