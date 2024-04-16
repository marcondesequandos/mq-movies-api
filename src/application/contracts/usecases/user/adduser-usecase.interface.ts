import User from "@/application/entities/user/user";
import {
  AddUserInputDto,
  AddUserOutputDto,
} from "@/main/dtos/add-user.usecase.dto";

export interface AddUserUseCaseInterface {
  run(data: AddUserInputDto): Promise<AddUserOutputDto>;
}
