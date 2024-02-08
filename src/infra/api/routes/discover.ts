import express, { Request, Response } from "express";
import { makeGetMovies } from "@/main/factories/getmovies.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { GetMoviesViewModel } from "@/presentation/view-models/getmovies.view-model";
export const moviesDiscovery = express.Router();

moviesDiscovery.get(
  "/",
  async (
    req: Request,
    res: Response
  ): Promise<HttpResponse<GetMoviesViewModel[]>> => {
    const getMoviesController = makeGetMovies();

    const page = parseInt(req.query.page as string, 10);
    const woLanguage = req.query.wol;
    const sort_by = req.query.sort_by;
    const include_adult = req.query.include_adult;

    try {
      const output: GetMoviesViewModel[] = await getMoviesController.handle({
        page,
        woLanguage,
        sort_by,
        include_adult,
      });
      res.send(output);
    } catch (e) {
      return internalServerError();
    }
  }
);
