import AddUserUseCase from "@/application/usecases/user/add-user/add-user.usecase";
import { makeAddUser } from "@/main/factories/users/add-user.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { AddUserViewModel } from "@/presentation/view-models/users/add-user.view-model";
import express, { Request, Response } from "express";
export const addUser = express.Router();

addUser.post(
  "/",
  async (
    req: Request,
    res: Response
  ): Promise<HttpResponse<AddUserViewModel>> => {
    const addUserController = makeAddUser();

    try {
      const payload = {
        name: req.body.id,
        email: req.body.email,
        lists: req.body.lists,
      };

      const output = await addUserController.handle(payload);
      res.send(output);
    } catch (e) {
      return internalServerError();
    }
  }
);
