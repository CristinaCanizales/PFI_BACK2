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
        references: {
          model: "equipos",
          key: "id",
        },
      },
      equipoBId: {
        type: Sequelize.INTEGER,
        references: {
          model: "equipos",
          key: "id",
        },
      },
      fechaPartido: {
        type: Sequelize.DATEONLY,
      },
      ganadorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "equipos",
          key: "id",
        },
      },
      torneoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "torneos",
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
    await queryInterface.dropTable("partidos");
  },
};
