"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("grabacions", {
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
        type: Sequelize.DATEONLY,
      },
      partidoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "partidos",
          key: "id",
        },
      },
      video: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("grabacions");
  },
};
