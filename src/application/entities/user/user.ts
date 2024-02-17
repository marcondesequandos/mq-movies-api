import { List } from "./list";

export type User = {
  id: string;
  name: string;
  email: string;
  lists: List[];
};
