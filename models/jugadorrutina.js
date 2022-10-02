"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jugadorRutina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jugadorRutina.init(
    {
      jugadorId: DataTypes.INTEGER,
      entrenamientoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "jugadorRutina",
    }
  );
  return jugadorRutina;
};
