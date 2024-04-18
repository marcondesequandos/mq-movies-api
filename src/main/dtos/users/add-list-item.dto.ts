export interface AddListItemInputDto {
  users_id: number;
  lists_id: number;
  id?: number;
  adult?: boolean;
  backdrop_path: string;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface AddListItemOutputDto {
  users_id: number;
  lists_id: number;
  id?: number;
  adult?: boolean;
  backdrop_path: string;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
