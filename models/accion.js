"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class accion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      accion.belongsTo(models.deporte, {
        as: "deporte",
        foreignKey: "deporteId",
      });
      accion.hasMany(models.futbol, {
        as: "futbol",
        foreignKey: "accionId",
      });
      accion.hasMany(models.volleyball, {
        as: "volleyball",
        foreignKey: "accionId",
      });
      accion.hasMany(models.handball, {
        as: "handball",
        foreignKey: "accionId",
      });
    }
  }
  accion.init(
    {
      nombre: DataTypes.STRING,
      deporteId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "accion",
    }
  );
  return accion;
};
