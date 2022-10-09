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
      handball.belongsTo(models.accion, {
        as: "accion",
        foreignKey: "accionId",
      });
      handball.belongsTo(models.jugador, {
        as: "jugador",
        foreignKey: "jugadorId",
      });
      handball.belongsTo(models.partido, {
        as: "partido",
        foreignKey: "partidoId",
      });
    }
  }
  handball.init(
    {
      accionId: DataTypes.INTEGER,
      jugadorId: DataTypes.INTEGER,
      partidoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "handball",
    }
  );
  return handball;
};