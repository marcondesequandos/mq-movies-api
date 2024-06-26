import { join } from "path";
import { Sequelize } from "sequelize-typescript";
import {
  UserListModel,
  MovieModel,
  UserModel,
  TvShowModel,
} from "../../repositories/user";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: join(__dirname, "../../../database.sqlite"),
});

export async function initDB() {
  await sequelize.addModels([
    UserModel,
    UserListModel,
    MovieModel,
    TvShowModel,
  ]);
  sequelize.options.logging = console.log;

  try {
    await console.log(
      "dirpath =>",
      join(__dirname, "../../../database.sqlite")
    );
    await sequelize.sync();
    console.log("Database synchronization successful");
    return "Database initialized successfully";
  } catch (error) {
    console.error("Error synchronizing models:", error);
    throw new Error("Database initialization failed");
  }
}
