import { ListModel } from "@/infra/modules/repositories/user/list.model";
import { DataTypes, Sequelize } from "sequelize";
import { MigrationFn } from "umzug";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().createTable("list_items", {
    id: {
      type: DataTypes.INTEGER,
      field: "list_item_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "users_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
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
    adult: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
    original_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    overview: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    popularity: {
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
  await sequelize.getQueryInterface().dropTable("list_items");
};
