"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("jugadores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numero: {
        type: Sequelize.INTEGER,
      },
      posicion: {
        type: Sequelize.STRING,
      },
      entrenamientos: {
        type: Sequelize.JSON,
      },
      equipoId: {
        type: Sequelize.INTEGER,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("jugadores");
  },
};