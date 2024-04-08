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

export async function initDB() {
  await sequelize.addModels([UserModel, ListModel, ListItemModel]);
  return new Promise((resolve, reject) => {
    sequelize
      .sync()
      .then((res) => console.log(res))
      .catch((err) => reject(err));
  });
}
