import { Movie } from "../movie/movie";
import { ListItem } from "./list-item";

export enum ListType {
  MOVIE = "movies",
  TV = "tv_shows",
}

export type List = {
  id: string;
  name: string;
  type: ListType;
  items: ListItem[];
};
