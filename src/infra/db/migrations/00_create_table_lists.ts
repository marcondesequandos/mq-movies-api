import { UserModel } from "@/infra/modules/user/user.model";
import { DataTypes, Sequelize } from "sequelize";
import { MigrationFn } from "umzug";

// criando migrations pelo que vi é necessário criar apenas em list e não em user o relacionamento entre eles já que users hasmany lists

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable("lists", {
    id: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable("lists");
};
