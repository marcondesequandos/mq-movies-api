import TvShow from "@/application/entities/user/tv-show";
import { AddTvShowInputDto } from "@/main/dtos/users/add-tv-show.dto";

export default interface TvShowRepositoryInterface {
  create(input: AddTvShowInputDto): Promise<TvShow>;
}
