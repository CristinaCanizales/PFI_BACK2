'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('torneos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      anioTorneo: {
        type: Sequelize.DATEONLY
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      ganadorId: {
        type: Sequelize.INTEGER
      },
      deporteId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('torneos');
  }
};