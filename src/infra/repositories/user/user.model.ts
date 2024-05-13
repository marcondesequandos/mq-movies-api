import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
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

  @Column({ allowNull: false, type: DataTypes.DATE })
  created_at: Date;

  @Column({ allowNull: false, type: DataTypes.DATE })
  updated_at: Date;
}
