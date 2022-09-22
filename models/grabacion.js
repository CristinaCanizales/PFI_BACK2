"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class grabacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  grabacion.init(
    {
      titulo: DataTypes.STRING,
      fecha: DataTypes.DATE,
      partidoId: DataTypes.INTEGER,
      equipoId: DataTypes.INTEGER,
      video: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "grabacion",
    }
  );
  return grabacion;
};
