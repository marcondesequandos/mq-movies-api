import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Scopes,
  Table,
} from "sequelize-typescript";
import { ListModel } from "./list.model";
import { DataTypes } from "sequelize";
import { UserModel } from "./user.model";
import User from "@/application/entities/user/user";

@Table({
  tableName: "list_items",
  timestamps: false,
  schema: null,
})
export class ListItemModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false, type: DataTypes.STRING })
  id: string;

  @ForeignKey(() => ListModel)
  @Column({ allowNull: false, type: DataTypes.STRING })
  lists_id: string;

  @BelongsTo(() => ListModel)
  List: ListModel;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataTypes.STRING })
  users_id: string;

  @BelongsTo(() => UserModel)
  User: UserModel;

  @Column({ allowNull: false, type: DataTypes.BOOLEAN })
  adult: boolean;

  @Column({ allowNull: false, type: DataTypes.STRING })
  backdrop_path: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  original_language: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  original_title?: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  original_name?: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  overview: string;

  @Column({ allowNull: false, type: DataTypes.NUMBER })
  popularity: number;

  @Column({ allowNull: false, type: DataTypes.STRING })
  poster_path: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  release_date?: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  first_air_date?: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  title?: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataTypes.BOOLEAN })
  video?: boolean;

  @Column({ allowNull: false, type: DataTypes.NUMBER })
  vote_average: number;

  @Column({ allowNull: false, type: DataTypes.NUMBER })
  vote_count: number;

  @Column({ allowNull: false, type: DataTypes.STRING })
  item_type: string;

  @Column({ allowNull: false, type: DataTypes.DATE })
  created_at: Date;

  @Column({ allowNull: false, type: DataTypes.DATE })
  updated_at: Date;
}
