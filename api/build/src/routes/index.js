import express from "express";
import routeRoutines from "./rutinas.js";
import routeUser from "./user.js";
const routes = express.Router();
routes.use("/Rutinas", routeRoutines);
routes.use("/Usuario", routeUser);
export default routes;
