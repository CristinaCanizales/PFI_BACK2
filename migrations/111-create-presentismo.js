'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("presentismos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fecha: {
        type: Sequelize.DATEONLY,
      },
      presente: {
        type: Sequelize.BOOLEAN,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      equipoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "equipos",
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
    await queryInterface.dropTable('presentismos');
  }
};