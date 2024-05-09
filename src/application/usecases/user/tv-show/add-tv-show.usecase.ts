import { AddTvShowUseCaseInterface } from "@/application/contracts/usecases/user/add-tv-show.usecase.interface";
import TvShow from "@/application/entities/user/tv-show";
import TvShowRepositoryInterface from "@/infra/modules/repositories/user/contracts/tv-show.repository-contract";
import { AddTvShowInputDto } from "@/main/dtos/users/add-tv-show.dto";

export default class AddTvShowUseCase implements AddTvShowUseCaseInterface {
  constructor(
    private readonly _addTvShowRepository: TvShowRepositoryInterface
  ) {}
  async run(data: AddTvShowInputDto): Promise<TvShow> {
    const tvShow = await this._addTvShowRepository.create(data);
    if (!tvShow) throw Error("Failed to create Tv Show");

    return tvShow;
  }
}
