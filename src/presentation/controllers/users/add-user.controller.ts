import { AddUserUseCaseInterface } from "@/application/contracts/usecases/user/adduser-usecase.interface";
import { AddUserInputDto } from "@/application/usecases/user/add-user/add-user.usecase.dto";
import { HttpController } from "@/presentation/contracts/Controller";
import {
  HttpResponse,
  internalServerError,
  ok,
} from "@/presentation/contracts/Http";
import { AddUserViewModel } from "@/presentation/view-models/users/add-user.view-model";

export class AddUserController implements HttpController {
  constructor(private readonly useCase: AddUserUseCaseInterface) {}
  async handle(
    input: AddUserInputDto
  ): Promise<HttpResponse<AddUserViewModel>> {
    try {
      console.log("controller handle called");
      const user = await this.useCase.run(input);
      const response = AddUserViewModel.map(user);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
