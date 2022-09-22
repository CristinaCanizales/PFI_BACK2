'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class handball extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  handball.init({
    gol7m: DataTypes.INTEGER,
    gol6m: DataTypes.INTEGER,
    golContra: DataTypes.INTEGER,
    golPenal: DataTypes.INTEGER,
    atajada: DataTypes.INTEGER,
    errada: DataTypes.INTEGER,
    robada: DataTypes.INTEGER,
    parada: DataTypes.INTEGER,
    expulsion: DataTypes.INTEGER,
    perdida: DataTypes.INTEGER,
    jugadorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'handball',
  });
  return handball;
};