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
        references: {
          model: "clubs",
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
