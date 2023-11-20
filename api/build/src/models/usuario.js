import DataTypes from "sequelize";
export default (db) => {
    const modelo = db.define("usuarios", {
        idusuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuario: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        clave: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        nombre: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        apellido: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        peso: {
            type: DataTypes.REAL
        },
        masa: {
            type: DataTypes.REAL
        },
        grasa: {
            type: DataTypes.REAL
        },
        cintura: {
            type: DataTypes.REAL
        },
        brazo: {
            type: DataTypes.REAL
        },
        pierna: {
            type: DataTypes.REAL
        },
        pecho: {
            type: DataTypes.REAL
        },
        "pecho-respirado": {
            type: DataTypes.REAL
        },
        "brazo-trabado": {
            type: DataTypes.REAL
        },
        altura: {
            type: DataTypes.REAL
        },
        edad: {
            type: DataTypes.INTEGER
        }
    }, { timestamps: false });
    return modelo;
};
