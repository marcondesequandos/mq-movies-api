import AggregateRoot from "../aggregate-root.interface";
import BaseEntity from "../base.entity";

type ListItemProps = {
  id?: number;
  type: string;
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
};

export default class ListItem extends BaseEntity implements AggregateRoot {
  private _backdrop_path: string;
  private _original_language?: string;
  private _poster_path: string;
  private _vote_average: number;

  constructor(props: ListItemProps) {
    super(props.id, props.createdAt, props.updatedAt);
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
