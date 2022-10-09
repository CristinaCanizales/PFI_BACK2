'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("handballs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "accions",
          key: "id",
        },
      },
      jugadorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "jugadors",
          key: "id",
        },
      },
      partidoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "partidos",
          key: "id",
        },
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
    await queryInterface.dropTable('handballs');
  }
};