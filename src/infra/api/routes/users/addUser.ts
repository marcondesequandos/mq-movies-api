import { makeAddUser } from "@/main/factories/users/add-user.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { AddUserViewModel } from "@/presentation/view-models/users/add-user.view-model";
import express, { Request, Response } from "express";

export const addUser = express.Router();

addUser.post("/", async function (req: Request, res: Response): Promise<
  HttpResponse<AddUserViewModel>
> {
  const addUserController = makeAddUser();

  try {
    const output = await addUserController.handle(req.body);
    res.send(output);
  } catch (e) {
    return internalServerError();
  }
});
