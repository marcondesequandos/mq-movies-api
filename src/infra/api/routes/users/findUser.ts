import { makeFindUser } from "@/main/factories/users/find-user.factory";
import express, { Request, Response } from "express";

export const findUser = express.Router();

findUser.get("/:id", async function (req: Request, res: Response) {
  const findUserController = makeFindUser();
  const id = parseInt(req.params.id);
  const output = await findUserController.handle(id);
  res.send(output);
});
