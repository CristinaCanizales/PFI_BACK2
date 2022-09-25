"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("volleyballs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      acceso: {
        type: Sequelize.INTEGER,
      },
      saque: {
        type: Sequelize.INTEGER,
      },
      recepcion: {
        type: Sequelize.INTEGER,
      },
      armado: {
        type: Sequelize.INTEGER,
      },
      bloqueo: {
        type: Sequelize.INTEGER,
      },
      defensa: {
        type: Sequelize.INTEGER,
      },
      punto: {
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
    await queryInterface.dropTable("volleyballs");
  },
};
