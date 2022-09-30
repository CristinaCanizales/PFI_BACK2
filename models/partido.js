"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class partido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      partido.hasOne(models.grabacion, {
        as: "grabacion",
        foreignKey: "id",
      });
      partido.belongsTo(models.equipo, {
        as: "equipoA",
        foreignKey: "equipoAId",
      });
      partido.belongsTo(models.equipo, {
        as: "equipoB",
        foreignKey: "equipoBId",
      });
      partido.belongsTo(models.equipo, {
        as: "ganador",
        foreignKey: "ganadorId",
      });
      partido.belongsTo(models.torneo, {
        as: "torneo",
        foreignKey: "torneoId",
      });
    }
  }
  partido.init(
    {
      equipoAId: DataTypes.INTEGER,
      equipoBId: DataTypes.INTEGER,
      fechaPartido: DataTypes.DATEONLY,
      ganadorId: DataTypes.INTEGER,
      torneoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "partido",
    }
  );
  return partido;
};
