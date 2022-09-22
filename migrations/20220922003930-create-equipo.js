"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("equipos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      genero: {
        type: Sequelize.STRING,
      },
      clubId: {
        type: Sequelize.INTEGER,
      },
      deporteId: {
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
    await queryInterface.dropTable("equipos");
  },
};
