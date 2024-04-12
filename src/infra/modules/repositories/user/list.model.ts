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
  schema: null,
})
export class ListModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false, field: "lists_id", type: DataTypes.STRING })
  id: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false, type: DataTypes.STRING })
  users_id: string;

  @BelongsTo(() => UserModel)
  User: UserModel;

  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  type: string;

  @HasMany(() => ListItemModel)
  list_items: ListItemModel[];

  @Column({ allowNull: false, type: DataTypes.DATE })
  created_at: Date;

  @Column({ allowNull: false, type: DataTypes.DATE })
  updated_at: Date;
}
