import AddUserUseCase from "@/application/usecases/user/add-user/add-user.usecase";
import { HttpResponse } from "@/presentation/contracts/Http";
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
    const addUserUseCase = new AddUserUseCase();
    const addUserController = new AddUserController(AddUserUseCase);
  }
);
