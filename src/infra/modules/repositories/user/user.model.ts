import {
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { ListModel } from "./list.model";
import { DataTypes } from "sequelize";

@Table({
  tableName: "users",
  timestamps: false,
})
export class UserModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false, field: "user_id", type: DataTypes.STRING })
  id: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  email: string;

  @HasMany(() => ListModel)
  lists: ListModel[];
}
