import AggregateRoot from "../aggregate-root.interface";
import BaseEntity from "../base.entity";
import Id from "../value-object/id.value-object";
import { ListItem } from "./list-item";

export enum ListType {
  MOVIE = "movies",
  TV = "tv_shows",
}

type ListProps = {
  id: Id;
  name: string;
  type: ListType;
  items: ListItem[];
  createdAt?: Date;
  updatedAt?: Date;
};

export default class List extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _type: ListType;
  private _items: ListItem[];

  constructor(props: ListProps) {
    super(props.id, props.createdAt, props.updatedAt);
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

  get items(): Array<ListItem> {
    return this._items;
  }

  set name(name: string) {
    this._name = name;
  }
}
