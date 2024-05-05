import TvShow from "@/application/entities/user/tv-show";

export class AddTvShowViewModel {
  id?: number;
  backdrop_path?: string;
  original_language?: string;
  original_name?: string;
  poster_path?: string;
  release_date?: string;
  name?: string;
  vote_average?: number;
  created_at?: Date;
  updated_at?: Date;

  static map(tvShow: TvShow): AddTvShowViewModel {
    if (!tvShow) return {};

    const tvShowModel = {
      id: tvShow.id,
      backdrop_path: tvShow.backdrop_path,
      original_language: tvShow.original_language,
      original_name: tvShow.original_name,
      poster_path: tvShow.poster_path,
      release_date: tvShow.first_air_date,
      name: tvShow.name,
      vote_average: tvShow.vote_average,
      created_at: tvShow.created_at,
      updated_at: tvShow.updated_at,
    };

    return tvShowModel;
  }
}
