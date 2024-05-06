import { makeAddTvShow } from "@/main/factories/users/add-tv-show.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { AddTvShowViewModel } from "@/presentation/view-models/users/add-tv-show.view-model";
import express, { Request, Response } from "express";

export const addTvShow = express.Router();

addTvShow.post("/", async function (req: Request, res: Response): Promise<
  HttpResponse<AddTvShowViewModel>
> {
  const addTvShowController = makeAddTvShow();

  try {
    const output = await addTvShowController.handle(req.body);
    res.send(output);
  } catch (e) {
    return internalServerError();
  }
});
