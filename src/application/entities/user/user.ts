import { List } from "./list";

type UserProps = {
  id: string;
  name: string;
  email: string;
  lists: List[];
};

export default class User extends
