"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class futbol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      futbol.belongsTo(models.jugador, {
        as: "jugador",
        foreignKey: "jugadorId",
      });
      futbol.belongsTo(models.partido, {
        as: "partido",
        foreignKey: "partidoId",
      });
    }
  }
  futbol.init(
    {
      golAdentro: DataTypes.INTEGER,
      golAfuera: DataTypes.INTEGER,
      golTiroLibre: DataTypes.INTEGER,
      golPenal: DataTypes.INTEGER,
      golCabeza: DataTypes.INTEGER,
      amarilla: DataTypes.INTEGER,
      roja: DataTypes.INTEGER,
      faltasCometidas: DataTypes.INTEGER,
      faltasRecibidas: DataTypes.INTEGER,
      pases: DataTypes.INTEGER,
      intercepciones: DataTypes.INTEGER,
      atajadas: DataTypes.INTEGER,
      contras: DataTypes.INTEGER,
      jugadorId: DataTypes.INTEGER,
      partidoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "futbol",
    }
  );
  return futbol;
};
