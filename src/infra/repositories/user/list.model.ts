import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { UserModel } from "./user.model";
import { DataTypes } from "sequelize";

@Table({
  tableName: "lists",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class ListModel extends Model {
  @PrimaryKey
  @Column({
    allowNull: false,
    field: "lists_id",
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataTypes.STRING })
  users_id: number;

  @BelongsTo(() => UserModel, {
    foreignKey: "users_id",
    as: "users",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  User: UserModel;

  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  type: string;
}
