import express, { Response, Request } from "express";
import { devolverError } from "../helpers/index.js";
import db from "../db.js";
const controllerRutina = express();
controllerRutina.post("/", async (req: Request, res: Response) => {
  try {
    const rutinas = await db.rutina.findAll();
    return res.status(200).json({
      info: true,
      msg: "Info OK",
      content: rutinas
    })
  } catch (error: any) {
    return res.status(devolverError(error?.response?.status)).json({
      info: false,
      msg: error
    })
  }
});
controllerRutina.post("/crearRutina", async (req: Request, res: Response) => {
  try {
    req.body.ejercicios = JSON.stringify(req.body.ejercicios);
    const rutinaCreada = await db.rutina.create({
      dia: req.body.dia,
      ejercicios: req.body.ejercicios
    });
    return res.status(200).json({
      info: true,
      msg: "Info OK",
      content: rutinaCreada
    })
  } catch (error: any) {
    return res.status(devolverError(error?.response?.status)).json({
      info: false,
      msg: error
    })
  }
});

export default controllerRutina;