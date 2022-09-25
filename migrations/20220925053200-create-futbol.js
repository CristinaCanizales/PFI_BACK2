"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("futbols", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      golAdentro: {
        type: Sequelize.INTEGER,
      },
      golAfuera: {
        type: Sequelize.INTEGER,
      },
      golTiroLibre: {
        type: Sequelize.INTEGER,
      },
      golPenal: {
        type: Sequelize.INTEGER,
      },
      golCabeza: {
        type: Sequelize.INTEGER,
      },
      amarilla: {
        type: Sequelize.INTEGER,
      },
      roja: {
        type: Sequelize.INTEGER,
      },
      faltasCometidas: {
        type: Sequelize.INTEGER,
      },
      faltasRecibidas: {
        type: Sequelize.INTEGER,
      },
      pases: {
        type: Sequelize.INTEGER,
      },
      intercepciones: {
        type: Sequelize.INTEGER,
      },
      atajadas: {
        type: Sequelize.INTEGER,
      },
      contras: {
        type: Sequelize.INTEGER,
      },
      jugadorId: {
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
    await queryInterface.dropTable("futbols");
  },
};
