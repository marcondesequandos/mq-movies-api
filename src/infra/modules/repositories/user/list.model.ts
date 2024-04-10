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
  @Column({ allowNull: false, field: "list_id", type: DataTypes.STRING })
  id: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataTypes.STRING })
  user_id: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string;

  @BelongsTo(() => UserModel)
  User: UserModel;

  @HasMany(() => ListItemModel)
  list_item: ListItemModel[];
}
