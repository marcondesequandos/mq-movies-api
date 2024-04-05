import express, { Express } from "express";
import { moviesDiscovery } from "./routes/movies/discover";
import { addUser } from "./routes/users/addUser";

export const app: Express = express();
app.use(express.json());

app.use("/discover/", moviesDiscovery);
app.use("/users/", addUser);
