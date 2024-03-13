import { ListModel } from "@/infra/modules/repositories/user/list.model";
import { DataTypes, Sequelize } from "sequelize";
import { MigrationFn } from "umzug";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable("list_items", {
    id: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    list_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: "ListModel",
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
      allowNull: true,
    },
    first_air_date: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    vote_average: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    vote_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    item_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable("lists");
};
