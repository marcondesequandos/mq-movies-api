import { AddUserUseCaseInterface } from "@/application/contracts/usecases/users/adduser-usecase.interface";
import { AddUserInputDto } from "@/main/dtos/users/add-user.dto";
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
      const user = await this.useCase.run(input);
      const response = AddUserViewModel.map(user);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
