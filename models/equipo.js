"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      equipo.hasMany(models.jugador, {
        as: "jugadores",
        foreignKey: "id",
      });
      equipo.belongsTo(models.club, {
        as: "club",
        foreignKey: "clubId",
      });
      equipo.belongsTo(models.deporte, {
        as: "deporte",
        foreignKey: "deporteId",
      });
      equipo.hasMany(models.partido, {
        as: "partidosGanados",
        foreignKey: "ganadorId",
      });
    }
  }
  equipo.init(
    {
      nombre: DataTypes.STRING,
      genero: DataTypes.STRING,
      clubId: DataTypes.INTEGER,
      deporteId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "equipo",
    }
  );
  return equipo;
};
