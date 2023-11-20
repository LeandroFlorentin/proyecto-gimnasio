import { Sequelize } from "sequelize";
import modeloUsuario from "./models/usuario.js";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./gimnasio.db"
})
const usuario = modeloUsuario(sequelize);
export default {
  db: sequelize,
  usuario
}