import AggregateRoot from "../aggregate-root.interface";
import ListItem from "./list-item";

type MovieProps = {
  id?: number;
  title: string;
  original_title: string;
  release_date: string;
  backdrop_path: string;
  original_language: string;
  poster_path: string;
  vote_average: number;
  createdAt?: Date;
  updatedAt: Date;
};

export default class Movie extends ListItem implements AggregateRoot {
  private _title: string;
  private _original_title: string;
  private _release_date: string;

  constructor(props: MovieProps) {
    super(props);
    this._title = props.title;
    this._original_title = props.original_title;
    this._release_date = props.release_date;
  }

  public get title(): string {
    return this._title;
  }

  public get original_title(): string {
    return this._original_title;
  }

  public get release_date(): string {
    return this._release_date;
  }
}
