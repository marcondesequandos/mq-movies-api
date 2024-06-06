import { ListType } from "@/application/entities/user/user-list";

export interface AddUserInputDto {
  id?: string;
  name: string;
  email: string;
  lists?: {
    id?: number;
    name: string;
    type: ListType;
  }[];
}
