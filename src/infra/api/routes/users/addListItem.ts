import { makeAddListItem } from "@/main/factories/users/add-list-item.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { AddListItemViewModel } from "@/presentation/view-models/users/add-list-item.view-model";
import express, { Request, Response } from "express";

export const addListItem = express.Router();

addListItem.post("/", async function (req: Request, res: Response): Promise<
  HttpResponse<AddListItemViewModel>
> {
  const addListItemController = makeAddListItem();

  try {
    console.log("body =>", req.body);
    const output = await addListItemController.handle(req.body);
    res.send(output);
  } catch (e) {
    return internalServerError();
  }
});
