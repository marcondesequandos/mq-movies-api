import { makeAddMovie } from "@/main/factories/users/movies/add-movie.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { AddMovieViewModel } from "@/presentation/view-models/users/movies/add-movie.view-model";
import express, { Request, Response } from "express";

export const addMovie = express.Router();

addMovie.post("/", async function (req: Request, res: Response): Promise<
  HttpResponse<AddMovieViewModel>
> {
  const addMovieController = makeAddMovie();

  try {
    const output = await addMovieController.handle(req.body);
    res.send(output);
  } catch (e) {
    return internalServerError();
  }
});
