"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("rols", [
      {
        nombre: "Jugador",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Cuerpo técnico",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("rols", null, {});
  },
};
