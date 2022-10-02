"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("deportes", [
      {
        nombre: "Handball",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Volleyball",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Futbol",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("deportes", null, {});
  },
};
