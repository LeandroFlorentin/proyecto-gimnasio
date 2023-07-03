import express from "express";
import routeRoutines from "./rutinas";
const routes = express.Router();
routes.use("/Rutinas",routeRoutines);
export default routes;