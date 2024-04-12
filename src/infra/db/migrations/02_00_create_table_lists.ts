import { UserModel } from "@/infra/modules/repositories/user/user.model";
import { DataTypes, Sequelize } from "sequelize";
import { MigrationFn } from "umzug";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable("lists", {
    id: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      field: "lists_id",
      allowNull: false,
    },
    users_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: "users",
        key: "users_id",
      },
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable("lists");
};
