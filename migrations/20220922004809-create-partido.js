"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("partidos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      equipoAId: {
        type: Sequelize.INTEGER,
      },
      equipoBId: {
        type: Sequelize.INTEGER,
      },
      fechaPartido: {
        type: Sequelize.DATEONLY,
      },
      ganadorId: {
        type: Sequelize.INTEGER,
      },
      torneoId: {
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
    await queryInterface.dropTable("partidos");
  },
};
