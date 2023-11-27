import DataTypes from "sequelize";
export default (db: any) => {
  const modelo = db.define("rutinas", {
    idrutina: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    dia: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ejercicios: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, { timestamps: false })
  return modelo;
}