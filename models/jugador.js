"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jugador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jugador.init(
    {
      numero: DataTypes.INTEGER,
      posicion: DataTypes.STRING,
      equipoId: DataTypes.INTEGER,
      usuarioId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "jugador",
    }
  );
  return jugador;
};
