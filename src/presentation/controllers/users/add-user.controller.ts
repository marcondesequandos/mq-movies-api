import { AddUserUseCaseInterface } from "@/application/contracts/usecases/user/adduser-usecase.interface";
import { AddUserInputDto } from "@/application/usecases/user/add-user/add-user.usecase.dto";
import { HttpController } from "@/presentation/contracts/Controller";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "@/presentation/contracts/Http";
import { AddUserViewModel } from "@/presentation/view-models/users/add-user.view-model";

type AddUserParams = {
  payload: AddUserInputDto;
};

export class AddUserController implements HttpController {
  constructor(private readonly useCase: AddUserUseCaseInterface) {}
  async handle(input: AddUserParams): Promise<HttpResponse<AddUserViewModel>> {
    try {
      const user = await this.useCase.run(input.payload);
      const response = AddUserViewModel.map(user);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
