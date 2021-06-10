import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import currentWeatherRouter from "./routers/currentWeatherRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/weatherdashboardredux",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(express.json());
app.use(express.urlencoded());

// routes

app.use("/api/currentweather", currentWeatherRouter);

// server live

app.get("/", (req, res) => {
  res.send("server is good to go!");
});

app.listen(port, () => {
  console.log(`app is live on http://localhost:${port}`);
});
