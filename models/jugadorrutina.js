"use strict";
const { Model } = require("sequelize");
const jugador = require("../models").jugador;
const entrenamiento = require("../models").entrenamiento;
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
      jugadorId: {
        type: DataTypes.INTEGER,
        references: {
          model: jugador,
          key: "id",
        },
      },
      entrenamientoId: {
        type: DataTypes.INTEGER,
        references: {
          model: entrenamiento,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "jugadorRutina",
    }
  );
  return jugadorRutina;
};
