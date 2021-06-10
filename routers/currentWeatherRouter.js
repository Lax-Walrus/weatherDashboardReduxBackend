import express from "express";
import expressAscynHandler from "express-async-handler";

const currentWeatherRouter = express.Router();

currentWeatherRouter.get(
  "/api/currentWeather",
  expressAscynHandler(async (req, res) => {})
);

export default currentWeatherRouter;
