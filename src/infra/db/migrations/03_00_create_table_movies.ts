import { ListModel } from "@/infra/modules/repositories/user/list.model";
import { DataTypes, Sequelize } from "sequelize";
import { MigrationFn } from "umzug";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable("movies", {
    id: {
      type: DataTypes.INTEGER,
      field: "movies_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    lists_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "lists",
        key: "lists_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    backdrop_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    original_language: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    original_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    poster_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    release_date: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    vote_average: {
      type: DataTypes.NUMBER,
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
  await sequelize.getQueryInterface().dropTable("movies");
};
