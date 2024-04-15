import { ListType } from "@/application/entities/user/list";

export interface AddUserInputDto {
  id?: string;
  name: string;
  email: string;
  lists: {
    id?: number;
    name: string;
    type: ListType;
    items?: {
      adult: boolean;
      backdrop_path: string;
      id: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      vote_average: number;
      vote_count: number;
    }[];
  }[];
}

export interface AddUserOutputDto {
  name: string;
  email: string;
  lists: {
    id?: number;
    name: string;
    type: ListType;
    items?: {
      adult: boolean;
      backdrop_path: string;
      id: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      vote_average: number;
      vote_count: number;
    }[];
  }[];
}
