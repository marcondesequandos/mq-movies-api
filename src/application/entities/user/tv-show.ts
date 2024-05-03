import AggregateRoot from "../aggregate-root.interface";
import ListItem from "./list-item";

type TvShowProps = {
  id?: number;
  backdrop_path: string;
  original_language: string;
  original_name: string;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  created_at?: Date;
  updated_at?: Date;
};

export default class TvShow extends ListItem implements AggregateRoot {
  private _name: string;
  private _original_name: string;
  private _first_air_date: string;

  constructor(props: TvShowProps) {
    super(props);
    this._name = props.name;
    this._original_name = props.original_name;
    this._first_air_date = props.first_air_date;
  }

  public get name(): string {
    return this._name;
  }

  public get original_title(): string {
    return this._original_name;
  }

  public get release_date(): string {
    return this._first_air_date;
  }
}
