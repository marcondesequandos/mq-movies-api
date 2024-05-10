import AddTvShowUseCase from "@/application/usecases/users/tv-shows/add-tv-show.usecase";
import TvShowRepository from "@/infra/modules/repositories/user/tv-show.repository";
import { Controller } from "@/presentation/contracts/Controller";
import { AddTvShowController } from "@/presentation/controllers/users/tv-shows/add-tv-show.controller";

export const makeAddTvShow = (): Controller => {
  const tvShowRepository = new TvShowRepository();
  const tvShowUseCase = new AddTvShowUseCase(tvShowRepository);
  return new AddTvShowController(tvShowUseCase);
};
