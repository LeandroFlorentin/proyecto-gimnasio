import express from "express";
import routeRoutines from "./rutinas";
import routeUser from "./user";
const routes = express.Router();
routes.use("/Routines",routeRoutines);
routes.use("/User",routeUser);
export default routes;