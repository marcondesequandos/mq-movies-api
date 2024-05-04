import TvShow from "@/application/entities/user/tv-show";
import { AddTvShowInputDto } from "@/main/dtos/users/add-tv-show.dto";

export interface AddTvShowUseCaseInterface {
  run(data: AddTvShowInputDto): Promise<TvShow>;
}
