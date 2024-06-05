import { FindUserUseCaseInterface } from "@/application/contracts/usecases/users/find-user-usecase.interface";
import { NotFoundError } from "@/application/errors/users/user-not-found.error";
import { HttpController } from "@/presentation/contracts/Controller";
import { HttpResponse, notFound, ok } from "@/presentation/contracts/Http";
import { FindUserViewModel } from "@/presentation/view-models/users/find-user.view-model";

export class FindUserController implements HttpController {
  constructor(private readonly usecase: FindUserUseCaseInterface) {}
  async handle(input: number): Promise<HttpResponse<FindUserViewModel>> {
    try {
      const user = await this.usecase.run(input);
      const response = FindUserViewModel.map(user);
      return ok(response);
    } catch (e) {
      console.error("Error finding User", e);
      if (e instanceof NotFoundError) return notFound(e.message);
    }
  }
}
