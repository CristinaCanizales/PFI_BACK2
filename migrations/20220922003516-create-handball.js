'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('handballs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gol7m: {
        type: Sequelize.INTEGER
      },
      gol6m: {
        type: Sequelize.INTEGER
      },
      golContra: {
        type: Sequelize.INTEGER
      },
      golPenal: {
        type: Sequelize.INTEGER
      },
      atajada: {
        type: Sequelize.INTEGER
      },
      errada: {
        type: Sequelize.INTEGER
      },
      robada: {
        type: Sequelize.INTEGER
      },
      parada: {
        type: Sequelize.INTEGER
      },
      expulsion: {
        type: Sequelize.INTEGER
      },
      perdida: {
        type: Sequelize.INTEGER
      },
      jugadorId: {
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
    await queryInterface.dropTable('handballs');
  }
};