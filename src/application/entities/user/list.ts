import AggregateRoot from "../aggregate-root.interface";
import BaseEntity from "../base.entity";
import Movie from "../user/movie";
import ListItem from "./list-item";
import TvShow from "./tv-show";

export enum ListType {
  MOVIE = "movies",
  TV = "tv_shows",
}

type ListProps = {
  id?: number;
  name: string;
  type: ListType;
  items?: Movie[] | TvShow[];
  created_at?: Date;
  updated_at?: Date;
};

export default class List extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _type: ListType;
  private _items: Movie[] | TvShow[];

  constructor(props: ListProps) {
    super(props.id, props.created_at, props.updated_at);
    this._name = props.name;
    this._type = props.type;
    this._items = props.items;
  }

  get name(): string {
    return this._name;
  }

  get type(): ListType {
    return this._type;
  }

  get items(): Array<Movie | TvShow> {
    return this._items;
  }

  set name(name: string) {
    this._name = name;
  }
}
