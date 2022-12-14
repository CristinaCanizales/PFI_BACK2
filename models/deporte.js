'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deporte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      deporte.hasMany(models.equipo, {
        as: "equipos",
        foreignKey: "deporteId",
      });
      deporte.hasMany(models.torneo, {
        as: "torneos",
        foreignKey: "deporteId",
      });
      deporte.hasMany(models.accion, {
        as: "acciones",
        foreignKey: "deporteId",
      });
    }
  }
  deporte.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'deporte',
  });
  return deporte;
};