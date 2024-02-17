import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { UserModel } from "./user.model";
import { ListItemModel } from "./list-item.model";

@Table({
  tableName: "lists",
  timestamps: false,
})
export class ListModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false, field: "list_id" })
  id: string;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false })
  user_id: string;

  @Column({ allowNull: false })
  name: string;

  @BelongsTo(() => UserModel)
  User: UserModel;

  @HasMany(() => ListItemModel)
  list_item: ListItemModel[];
}
