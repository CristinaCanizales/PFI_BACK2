'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('presentismos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      presente: {
        type: Sequelize.BOOLEAN
      },
      usuarioId: {
        type: Sequelize.INTEGER
      },
      equipoId: {
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
    await queryInterface.dropTable('presentismos');
  }
};