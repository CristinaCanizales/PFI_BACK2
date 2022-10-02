"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class volleyball extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      volleyball.belongsTo(models.jugador, {
        as: "jugador",
        foreignKey: "jugadorId",
      });
      volleyball.belongsTo(models.partido, {
        as: "partido",
        foreignKey: "partidoId",
      });
    }
  }
  volleyball.init(
    {
      acceso: DataTypes.INTEGER,
      saque: DataTypes.INTEGER,
      recepcion: DataTypes.INTEGER,
      armado: DataTypes.INTEGER,
      bloqueo: DataTypes.INTEGER,
      defensa: DataTypes.INTEGER,
      punto: DataTypes.INTEGER,
      jugadorId: DataTypes.INTEGER,
      partidoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "volleyball",
    }
  );
  return volleyball;
};
