import express, { Request, Response } from "express";
export const findList = express.Router();

findList.get("/:id", async function (req: Request, res: Response) {
  const findListController = makeFindList();
  const id = parseInt(req.params.id);
  const output = await findListController.handle(id);
  res.send(output);
});
