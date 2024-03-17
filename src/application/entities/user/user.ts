import { Address } from "cluster";
import { List } from "./list";

type UserProps = {
  id: string;
  name: string;
  email: string;
  lists: List[];
};

export default class User {
  private _id: string;
  private _name: string;
  private _email: Address;
  private _lists: List[];
}
