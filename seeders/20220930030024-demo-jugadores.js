"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jugadors", [
      {
        numero: 1,
        posicion: "central",
        equipoId: 1,
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        numero: 2,
        posicion: "lateral",
        equipoId: 1,
        usuarioId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        numero: 3,
        posicion: "lateral",
        equipoId: 1,
        usuarioId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        numero: 1,
        posicion: "central",
        equipoId: 2,
        usuarioId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jugadors", null, {});
  },
};
