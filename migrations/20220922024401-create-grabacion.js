"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("grabaciones", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      fecha: {
        type: Sequelize.DATE,
      },
      partidoId: {
        type: Sequelize.INTEGER,
      },
      equipoId: {
        type: Sequelize.INTEGER,
      },
      video: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("grabaciones");
  },
};
