import BaseEntity from "../base.entity";
import AggregateRoot from "../aggregate-root.interface";
import UserList from "./user-list";

type UserProps = {
  id?: number;
  name: string;
  email: string;
  lists?: UserList[];
  created_at?: Date;
  updated_at?: Date;
};

// precisa verificar aqui, não sei se o user ja vai ser criado com lists...

export default class User extends BaseEntity implements AggregateRoot {
  private _name: string;
  private _email: string;
  private _lists: UserList[];

  constructor(props: UserProps) {
    super(props.id, props.created_at, props.updated_at);
    this._name = props.name;
    this._email = props.email;
    this._lists = props.lists;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get lists(): Array<UserList> {
    return this._lists;
  }

  set name(name: string) {
    this._name = name;
  }
}
