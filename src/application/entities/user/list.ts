import { Movie } from "../movie/movie";
import { ListItem } from "./list-item";

export enum ListType {
  MOVIE = "movie_list",
  TV = "tv_list",
}

export type List = {
  id: string;
  name: string;
  type: ListType;
  items: ListItem[];
};
