import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

import { DataTypes } from "sequelize";
import { UserListModel } from "..";

@Table({
  tableName: "movies",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class MovieModel extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    field: "movies_id",
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => UserListModel)
  @Column({ allowNull: false, type: DataTypes.INTEGER })
  lists_id: number;

  @BelongsTo(() => UserListModel, {
    foreignKey: "lists_id",
    as: "lists",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  UserList: UserListModel;

  @Column({ allowNull: false, type: DataTypes.STRING })
  backdrop_path: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  original_language: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  original_title: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  poster_path: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  release_date: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  title: string;

  @Column({ allowNull: false, type: DataTypes.NUMBER })
  vote_average: number;

  @Column({ allowNull: false, type: DataTypes.DATE })
  created_at: Date;

  @Column({ allowNull: false, type: DataTypes.DATE })
  updated_at: Date;
}
