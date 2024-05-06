import express, { Express } from "express";
import { moviesDiscovery } from "./routes/movies/discover";
import { addUser } from "./routes/users/addUser";
import { addMovie } from "./routes/users/addMovie";
import { addTvShow } from "./routes/users/addTvShow";

export const app: Express = express();
app.use(express.json());

app.use("/discover/", moviesDiscovery);
app.use("/users/", addUser);
app.use("/movies/", addMovie);
app.use("/tvShows/", addTvShow);
