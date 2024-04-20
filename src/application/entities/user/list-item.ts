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
  private _adult?: boolean;
  private _backdrop_path: string;
  private _original_language?: string;
  private _overview?: string;
  private _poster_path: string;
  private _vote_average: number;

  constructor(props: ListItemProps) {
    super(props.id, props.createdAt, props.updatedAt);
    this._adult = props.adult;
    this._backdrop_path = props.backdrop_path;
    this._original_language = props.original_language;
    this._overview = props.overview;
    this._poster_path = props.poster_path;
    this._vote_average = props.vote_average;
  }

  public get adult(): boolean {
    return this._adult;
  }

  public get backdrop_path(): string {
    return this._backdrop_path;
  }

  public get original_language(): string {
    return this._original_language;
  }

  public get original_title(): string | undefined {
    return this._original_title;
  }

  public get original_name(): string | undefined {
    return this._original_name;
  }

  public get overview(): string {
    return this._overview;
  }

  public get popularity(): number {
    return this._popularity;
  }

  public get poster_path(): string {
    return this._poster_path;
  }

  public get release_date(): string | undefined {
    return this._release_date;
  }

  public get first_air_date(): string | undefined {
    return this._first_air_date;
  }

  public get title(): string | undefined {
    return this._title;
  }

  public get name(): string | undefined {
    return this._name;
  }

  public get video(): boolean | undefined {
    return this._video;
  }

  public get vote_average(): number {
    return this._vote_average;
  }

  public get vote_count(): number {
    return this._vote_count;
  }
}
