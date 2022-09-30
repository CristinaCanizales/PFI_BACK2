'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entrenamiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      entrenamiento.belongsToMany(models.jugador, {
        through: "jugadorRutina",
      });
    }
  }
  entrenamiento.init({
    titulo: DataTypes.STRING,
    detalleRutina: DataTypes.TEXT,
    categoria: DataTypes.STRING,
    video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'entrenamiento',
  });
  return entrenamiento;
};