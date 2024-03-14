import { User } from "@/application/entities/user/user";
import { AddUserInputDto } from "@/application/usecases/user/add-user/add-user.usecase.dto";

export interface AddUserUseCaseInterface {
  run(data: AddUserInputDto): Promise<User>;
}
