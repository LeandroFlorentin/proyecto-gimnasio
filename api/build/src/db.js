import { Sequelize } from "sequelize";
import modeloUsuario from "./models/usuario.js";
import modeloRutina from "./models/rutina.js";
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./gimnasio.db"
});
const usuario = modeloUsuario(sequelize);
const rutina = modeloRutina(sequelize);
export default {
    db: sequelize,
    usuario,
    rutina
};
