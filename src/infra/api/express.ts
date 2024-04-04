import express, { Express } from "express";
import { moviesDiscovery } from "./routes/movies/discover";

export const app: Express = express();
app.use(express.json());

app.use("/discover/", moviesDiscovery);
