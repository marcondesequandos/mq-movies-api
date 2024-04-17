import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Scopes,
  Table,
} from "sequelize-typescript";
import { UserModel } from "./user.model";
import { ListItemModel } from "./list-item.model";
import { DataTypes } from "sequelize";

@Table({
  tableName: "lists",
  timestamps: false,
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

  @HasMany(() => ListItemModel, { as: "list_items" })
  list_items?: ListItemModel[];

  @Column({ allowNull: false, type: DataTypes.DATE })
  created_at: Date;

  @Column({ allowNull: false, type: DataTypes.DATE })
  updated_at: Date;
}
