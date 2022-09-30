"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.belongsTo(models.rol, {
        as: "rol",
        foreignKey: "rolId",
      });
      usuario.hasOne(models.jugador, {
        as: "jugador",
        foreignKey: "id",
      });
      usuario.hasMany(models.presentismo, {
        as: "presentismo",
        foreignKey: "id",
      });
    }
  }
  usuario.init(
    {
      rolId: DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      correo: DataTypes.STRING,
      contrasena: DataTypes.STRING,
      edad: DataTypes.INTEGER,
      direccion: DataTypes.STRING,
      telefono: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usuario",
    }
  );
  return usuario;
};
