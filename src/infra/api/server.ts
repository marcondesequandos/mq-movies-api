import { initDB, sequelize } from "../db/config/config";
import { app } from "./express";
import dotenv from "dotenv";

dotenv.config();
const port: number = Number(process.env.PORT) || 3000;

initDB();

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
});
