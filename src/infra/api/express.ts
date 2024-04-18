import express, { Express } from "express";
import { moviesDiscovery } from "./routes/movies/discover";
import { addUser } from "./routes/users/addUser";
import { addListItem } from "./routes/users/addListItem";

export const app: Express = express();
app.use(express.json());

app.use("/discover/", moviesDiscovery);
app.use("/users/", addUser);
app.use("/listItems/", addListItem);
