import AddUserUseCase from "@/application/usecases/user/add-user/add-user.usecase";
import { UserModel } from "@/infra/modules/repositories/user";
import UserRepository from "@/infra/modules/repositories/user/user.repository";
import { makeAddUser } from "@/main/factories/users/add-user.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { AddUserController } from "@/presentation/controllers/users/add-user.controller";
import { AddUserViewModel } from "@/presentation/view-models/users/add-user.view-model";
import express, { Request, Response } from "express";

export const addUser = express.Router();

addUser.post(
  "/",
  async (
    req: Request,
    res: Response
  ): Promise<HttpResponse<AddUserViewModel>> => {
    // const addUserController = makeAddUser();
    console.log(req.body);

    try {
      const userRepository = new UserRepository();
      const userUseCase = new AddUserUseCase(userRepository);
      const addUserController = new AddUserController(userUseCase);

      const output = await addUserController.handle(req.body);
      console.log(output);
      res.send(output);
    } catch (e) {
      console.log(e);
      return internalServerError();
    }
  }
);
