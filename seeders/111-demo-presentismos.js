"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("presentismos", [
      {
        fecha: new Date(2022, 6, 19),
        presente: true,
        usuarioId: 1,
        equipoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(2022, 6, 19),
        presente: true,
        usuarioId: 2,
        equipoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(2022, 6, 21),
        presente: true,
        usuarioId: 3,
        equipoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(2022, 6, 21),
        presente: true,
        usuarioId: 4,
        equipoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("presentismos", null, {});
  },
};
