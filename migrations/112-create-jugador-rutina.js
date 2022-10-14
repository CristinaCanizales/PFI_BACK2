'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("jugadorRutinas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jugadorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "jugadors",
          key: "id",
        },
      },
      entrenamientoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "entrenamientos",
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
    await queryInterface.dropTable('jugadorRutinas');
  }
};