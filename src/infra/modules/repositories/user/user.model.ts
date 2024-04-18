import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { ListModel } from "./list.model";
import { DataTypes } from "sequelize";
import { ListItemModel } from "./list-item.model";
import internal from "stream";

@Table({
  tableName: "users",
  timestamps: false,
})
export class UserModel extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    field: "users_id",
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  email: string;

  @HasMany(() => ListModel, { as: "lists" })
  lists: ListModel[];

  @Column({ allowNull: false, type: DataTypes.DATE })
  created_at: Date;

  @Column({ allowNull: false, type: DataTypes.DATE })
  updated_at: Date;
}
