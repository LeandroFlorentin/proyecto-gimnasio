import express, { Request, Response } from "express";
import { Sequelize } from "sequelize";
import db from "../db.js";
import md5 from "md5";
const userController = express();
userController.post("/Logeo", (req: Request, res: Response) => {
  try {
    db.db.sync().then(async () => {
      req.body.clave = md5(req.body.clave)
      for (const [key, value] of Object.entries(req.body)) {
        if (key === "usuario") req.body[key] = req.body[key] = Sequelize.literal(`LOWER("${key}") LIKE LOWER('%${value}%')`);
        else req.body[key] = value
      }
      let usuarioEncontrado = await db.usuario.findOne({ where: req.body })
      if (usuarioEncontrado) return res.status(200).json({
        info: true,
        msg: "Info OK",
        content: "Logeo realizado con exito"
      })
      else return res.status(401).json({
        info: false,
        msg: "Usuario o contraseña incorrecta, vuelta a intentar"
      })
    })
  } catch (error: any) {
    return res.status(error.response.status).json({
      info: false,
      msg: "Error de servidor, intente mas tarde"
    })
  }
})

userController.post("/RegistrarUsuario", (req: Request, res: Response) => {
  try {
    db.db.sync().then(async () => {
      req.body.clave = md5(req.body.clave)
      const usuarioCreado = await db.usuario.create(req.body);
      res.status(200).json({
        info: true,
        msg: "Info OK",
        content: usuarioCreado
      })
    })
  } catch (error: any) {
    res.status(error.response.status).json({
      info: false,
      msg: "Error al crear usuario"
    })
  }
})
export default userController;