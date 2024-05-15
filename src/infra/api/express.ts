import express, { Express } from "express";
import { moviesDiscovery } from "./routes/movies/discover";
import { addUser } from "./routes/users/addUser";
import { addMovie } from "./routes/users/addMovie";
import { addTvShow } from "./routes/users/addTvShow";
import { listUsers } from "./routes/users/listUsers";
import { findUser } from "./routes/users/findUser";

export const app: Express = express();
app.use(express.json());

app.use("/discover/", moviesDiscovery);
app.use("/user/", findUser);
app.use("/users/", addUser);
app.use("/users/", listUsers);
app.use("/movies/", addMovie);
app.use("/tvShows/", addTvShow);
