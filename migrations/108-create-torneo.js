'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("torneos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      anioTorneo: {
        type: Sequelize.DATEONLY,
      },
      descripcion: {
        type: Sequelize.TEXT,
      },
      ganadorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "equipos",
          key: "id",
        },
      },
      deporteId: {
        type: Sequelize.INTEGER,
        references: {
          model: "deportes",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('torneos');
  }
};