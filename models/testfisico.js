'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testFisico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  testFisico.init({
    resistencia: DataTypes.INTEGER,
    velocidad: DataTypes.INTEGER,
    saltoAlto: DataTypes.INTEGER,
    saltoLargo: DataTypes.INTEGER,
    fechaTest: DataTypes.DATEONLY,
    jugadorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'testFisico',
  });
  return testFisico;
};