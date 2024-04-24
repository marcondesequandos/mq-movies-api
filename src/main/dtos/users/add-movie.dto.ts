export interface AddMovieInputDto {
  lists_id: number;
  id?: number;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  createdAt?: Date;
  updatedAt?: Date;
}
