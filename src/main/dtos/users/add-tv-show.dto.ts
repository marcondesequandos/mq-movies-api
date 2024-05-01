export interface AddTvShowInputDto {
  lists_id: number;
  id?: number;
  backdrop_path: string;
  original_language: string;
  original_name: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  created_at?: Date;
  updated_at: Date;
}
