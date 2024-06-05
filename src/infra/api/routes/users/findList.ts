import { makeFindUserList } from "@/main/factories/users/users-lists/find-user-list.factory";
import express, { Request, Response } from "express";
export const findUserList = express.Router();

findUserList.get("/:id", async function (req: Request, res: Response) {
  const findListController = makeFindUserList();
  const id = parseInt(req.params.id);
  const output = await findListController.handle(id);
  res.send(output);
});
