'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class presentismo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      presentismo.belongsTo(models.usuario, {
        as: "usuario",
        foreignKey: "usuarioId",
      });
      presentismo.belongsTo(models.equipo, {
        as: "equipo",
        foreignKey: "equipoId",
      });
    }
  }
  presentismo.init(
    {
      fecha: DataTypes.DATEONLY,
      presente: DataTypes.BOOLEAN,
      usuarioId: DataTypes.INTEGER,
      equipoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "presentismo",
    }
  );
  return presentismo;
};