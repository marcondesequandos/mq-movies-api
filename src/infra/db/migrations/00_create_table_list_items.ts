import { ListModel } from "@/infra/modules/user/list.model";
import { UserModel } from "@/infra/modules/user/user.model";
import { stringify } from "querystring";
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
    list_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: ListModel,
        key: "id",
      },
    },
    adult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    backdrop_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    original_language: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    original_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    original_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    overview: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    popularity: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    poster_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    release_date: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    first_air_date: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    video: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable("lists");
};
