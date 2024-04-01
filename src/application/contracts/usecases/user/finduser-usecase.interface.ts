import User from "@/application/entities/user/user";
import { FindUserUseCaseInputDTO } from "@/application/usecases/user/find-user/find-user.usecase.dto";

export interface FindUserUsecaseInterface {
  run(input: FindUserUseCaseInputDTO): Promise<User>;
}
