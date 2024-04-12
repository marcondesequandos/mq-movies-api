import { join } from "path";
import { Sequelize } from "sequelize-typescript";
import {
  ListItemModel,
  ListModel,
  UserModel,
} from "../../../infra/modules/repositories/user";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: join(__dirname, "../../../../database.sqlite"),
});

// export async function initDB() {
//   await sequelize.addModels([UserModel, ListModel, ListItemModel]);

//   return new Promise((resolve, reject) => {
//     sequelize
//       .sync()
//       .then(() => console.log("Database synchronization successfull"))
//       .then((res) => console.log("res =>", res))
//       .catch((err) => reject(err));
//   });
// }

export async function initDB() {
  await sequelize.addModels([UserModel, ListModel, ListItemModel]);
  sequelize.options.logging = console.log;

  try {
    await sequelize.sync();
    console.log("Database synchronization successful");
    return "Database initialized successfully"; // Resolve the promise
  } catch (error) {
    console.error("Error synchronizing models:", error);
    throw new Error("Database initialization failed"); // Reject the promise
  }
}
