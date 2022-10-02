"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("partidos", [
      {
        equipoAId: 1,
        equipoBId: 2,
        fechaPartido: new Date(2022, 6, 19),
        ganadorId: 1,
        torneoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        equipoAId: 1,
        equipoBId: 3,
        fechaPartido: new Date(2022, 6, 9),
        ganadorId: 1,
        torneoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("partidos", null, {});
  },
};
