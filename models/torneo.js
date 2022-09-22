'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class torneo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  torneo.init({
    nombre: DataTypes.STRING,
    anioTorneo: DataTypes.DATEONLY,
    descripcion: DataTypes.TEXT,
    ganadorId: DataTypes.INTEGER,
    deporteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'torneo',
  });
  return torneo;
};