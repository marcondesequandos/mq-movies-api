import { initDB, sequelize } from "../db/config/config";
import { ListItemModel } from "../modules/repositories/user/list-item.model";
import { ListModel } from "../modules/repositories/user/list.model";
import { UserModel } from "../modules/repositories/user/user.model";
import { app } from "./express";
import dotenv from "dotenv";

dotenv.config();
const port: number = Number(process.env.PORT) || 3000;

initDB();

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
});
