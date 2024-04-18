import User from "@/application/entities/user/user";
import { AddUserInputDto } from "@/main/dtos/users/add-user.dto";

export interface AddUserUseCaseInterface {
  run(data: AddUserInputDto): Promise<User>;
}
