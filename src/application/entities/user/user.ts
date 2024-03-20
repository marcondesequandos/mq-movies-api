import { List } from "./list";
import BaseEntity from "../base.entity";
import AggregateRoot from "../aggregate-root.interface";
import Id from "../value-object/id.value-object";

type UserProps = {
  id: Id;
  name: string;
  email: string;
  lists: List[];
  createdAt?: Date;
  updatedAt?: Date;
};

export default class User extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _email: string;
  private _lists: List[];

  constructor(props: UserProps) {
    super(props.id, props.createdAt, props.updatedAt);
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get lists(): Array<List> {
    return this._lists;
  }

  set name(name: string) {
    this._name = name;
  }
}
