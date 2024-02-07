import express, { Express } from "express";
import { moviesDiscovery } from "./routes/discover";

export const app: Express = express();
app.use(express.json());

app.use("/discover", moviesDiscovery);
