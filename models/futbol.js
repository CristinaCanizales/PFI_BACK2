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
      futbol.belongsTo(models.accion, {
        as: "accion",
        foreignKey: "accionId",
      });
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
      accionId: DataTypes.INTEGER,
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
