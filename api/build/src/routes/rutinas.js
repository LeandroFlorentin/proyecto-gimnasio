import express from "express";
import controllerRutina from "../controllers/rutinas.js";
const routeRoutines = express();
routeRoutines.use("/", controllerRutina);
export default routeRoutines;
