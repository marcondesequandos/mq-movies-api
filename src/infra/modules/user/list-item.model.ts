import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { ListModel } from "./list.model";

@Table({
  tableName: "list_items",
  timestamps: false,
})
export class ListItemModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  id: string;

  @ForeignKey(() => ListModel)
  @Column({ allowNull: false })
  list_id: string;

  @Column({ allowNull: false })
  adult: boolean;

  @Column({ allowNull: false })
  backdrop_path: string;

  @Column({ allowNull: false })
  original_language: string;

  @Column({ allowNull: true })
  original_title?: string;

  @Column({ allowNull: true })
  original_name?: string;

  @Column({ allowNull: false })
  overview: string;

  @Column({ allowNull: false })
  popularity: number;

  @Column({ allowNull: false })
  poster_path: string;

  @Column({ allowNull: true })
  release_date?: string;

  @Column({ allowNull: true })
  first_air_date?: string;

  @Column({ allowNull: true })
  title?: string;

  @Column({ allowNull: true })
  name?: string;

  @Column({ allowNull: true })
  video?: boolean;

  @Column({ allowNull: false })
  vote_average: number;

  @Column({ allowNull: false })
  vote_count: number;

  @Column({ allowNull: false })
  item_type: string;
}
