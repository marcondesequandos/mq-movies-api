import { UserNotFoundError } from "@/application/errors/users/user-not-found.error";
import { makeFindUser } from "@/main/factories/users/find-user.factory";
import {
  HttpResponse,
  internalServerError,
  notFound,
} from "@/presentation/contracts/Http";
import { FindUserViewModel } from "@/presentation/view-models/users/find-user.view-model";
import express, { Request, Response } from "express";

export const findUser = express.Router();

findUser.get("/:id", async function (req: Request, res: Response): Promise<
  HttpResponse<FindUserViewModel>
> {
  const findUserController = makeFindUser();

  try {
    console.log("params =>", req.params);
    const id = parseInt(req.params.id);
    console.log(id);
    const output = await findUserController.handle(id);
    res.send(output);
  } catch (e) {
    if (e instanceof UserNotFoundError) return notFound(e.message);
    return internalServerError();
  }
});
