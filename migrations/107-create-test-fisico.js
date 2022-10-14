'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("testFisicos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      resistencia: {
        type: Sequelize.INTEGER,
      },
      velocidad: {
        type: Sequelize.INTEGER,
      },
      saltoAlto: {
        type: Sequelize.INTEGER,
      },
      saltoLargo: {
        type: Sequelize.INTEGER,
      },
      fechaTest: {
        type: Sequelize.DATEONLY,
      },
      jugadorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "jugadors",
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
    await queryInterface.dropTable('testFisicos');
  }
};