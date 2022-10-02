"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("testFisicos", [
      {
        resistencia: 5,
        velocidad: 7,
        saltoAlto: 2,
        saltoLargo: 3,
        fechaTest: new Date(2022, 6, 19),
        jugadorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resistencia: 7,
        velocidad: 5,
        saltoAlto: 1,
        saltoLargo: 2,
        fechaTest: new Date(2022, 6, 19),
        jugadorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resistencia: 8,
        velocidad: 6,
        saltoAlto: 2,
        saltoLargo: 3,
        fechaTest: new Date(2022, 6, 19),
        jugadorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resistencia: 5,
        velocidad: 5,
        saltoAlto: 1,
        saltoLargo: 2,
        fechaTest: new Date(2022, 6, 19),
        jugadorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("testFisicos", null, {});
  },
};
