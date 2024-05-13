import { makeListUsers } from "@/main/factories/users/list-users.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { ListUsersViewModel } from "@/presentation/view-models/users/list-users.view-model";
import express, { Request, Response } from "express";

export const listUsers = express.Router();

listUsers.get("/", async function (req: Request, res: Response): Promise<
  HttpResponse<ListUsersViewModel>
> {
  const listUsersController = makeListUsers();

  try {
    const output = await listUsersController.handle();
    res.send(output);
  } catch (e) {
    return internalServerError();
  }
});
