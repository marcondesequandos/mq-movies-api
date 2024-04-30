import AggregateRoot from "../aggregate-root.interface";
import BaseEntity from "../base.entity";

type ListItemProps = {
  id?: number;
  backdrop_path: string;
  original_language: string;
  poster_path: string;
  vote_average: number;
  created_at?: Date;
  updated_at?: Date;
};

export default class ListItem extends BaseEntity implements AggregateRoot {
  private _backdrop_path: string;
  private _original_language: string;
  private _poster_path: string;
  private _vote_average: number;

  constructor(props: ListItemProps) {
    super(props.id, props.created_at, props.updated_at);
    this._backdrop_path = props.backdrop_path;
    this._original_language = props.original_language;
    this._poster_path = props.poster_path;
    this._vote_average = props.vote_average;
  }

  public get backdrop_path(): string {
    return this._backdrop_path;
  }

  public get original_language(): string {
    return this._original_language;
  }

  public get poster_path(): string {
    return this._poster_path;
  }

  public get vote_average(): number {
    return this._vote_average;
  }
}
