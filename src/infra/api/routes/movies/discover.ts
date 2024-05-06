import express, { Request, Response } from "express";
import { makeGetMovies } from "@/main/factories/movies/getmovies.factory";
import {
  HttpResponse,
  internalServerError,
} from "@/presentation/contracts/Http";
import { GetMoviesViewModel } from "@/presentation/view-models/movies/getmovies.view-model";
export const moviesDiscovery = express.Router();

moviesDiscovery.get("/", async function (req: Request, res: Response): Promise<
  HttpResponse<GetMoviesViewModel[]>
> {
  const getMoviesController = makeGetMovies();

  const type = req.query.type;
  const page = parseInt(req.query.page as string, 10);
  const woLanguage = req.query.wol;
  const sort_by = req.query.sort_by;
  const include_adult = req.query.include_adult;
  const vote_count_gte = parseInt(req.query.vote_count_gte as string, 10);

  try {
    const output: GetMoviesViewModel[] = await getMoviesController.handle({
      type,
      page,
      woLanguage,
      sort_by,
      include_adult,
      vote_count_gte,
    });
    res.send(output);
  } catch (e) {
    return internalServerError();
  }
});
