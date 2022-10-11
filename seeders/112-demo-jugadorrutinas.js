"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jugadorRutinas", [
      {
        usuarioId: 1,
        entrenamientoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuarioId: 1,
        entrenamientoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuarioId: 1,
        entrenamientoId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuarioId: 2,
        entrenamientoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jugadorRutinas", null, {});
  },
};
