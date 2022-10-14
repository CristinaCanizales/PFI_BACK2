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
      grabacion.belongsTo(models.partido, {
        as: "partido",
        foreignKey: "partidoId",
      });
    }
  }
  grabacion.init(
    {
      titulo: DataTypes.STRING,
      fecha: DataTypes.DATEONLY,
      partidoId: DataTypes.INTEGER,
      video: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "grabacion",
    }
  );
  return grabacion;
};
