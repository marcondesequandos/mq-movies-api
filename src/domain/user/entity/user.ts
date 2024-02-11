import { MovieList } from "./movie-list";

export type User = {
  id: string;
  name: string;
  email: string;
  lists: MovieList[];
};
