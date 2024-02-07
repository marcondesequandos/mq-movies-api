import express, { Request, Response } from "express";
import { makeGetMovies } from "@/main/factories/GetMoviesFactory";
import { internalServerError } from "@/presentation/contracts/Http";
export const moviesDiscovery = express.Router();

moviesDiscovery.get("/", async (req: Request, res: Response) => {
  const getMoviesController = makeGetMovies();

  try {
    const output = await getMoviesController.handle(2);
    res.send(output);
  } catch (e) {
    return internalServerError();
  }
});
