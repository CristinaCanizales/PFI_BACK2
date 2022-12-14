"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jugador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jugador.belongsTo(models.usuario, {
        as: "usuario",
        foreignKey: "usuarioId",
      });
      jugador.belongsTo(models.equipo, {
        as: "equipo",
        foreignKey: "equipoId",
      });
      jugador.belongsToMany(models.entrenamiento, {
        through: "jugadorRutina",
      });
      jugador.hasMany(models.testFisico, {
        as: "tests",
        foreignKey: "jugadorId",
      });
      jugador.hasMany(models.handball, {
        as: "handball",
        foreignKey: "jugadorId",
      });
      jugador.hasMany(models.futbol, {
        as: "futbol",
        foreignKey: "jugadorId",
      });
      jugador.hasMany(models.volleyball, {
        as: "volleyball",
        foreignKey: "jugadorId",
      });
    }
  }
  jugador.init(
    {
      numero: DataTypes.INTEGER,
      posicion: DataTypes.STRING,
      equipoId: DataTypes.INTEGER,
      usuarioId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "jugador",
    }
  );
  return jugador;
};
