"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("clubs", [
      {
        nombre: "San Telmo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Atlético River Plate",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Dorrego Handball",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Ferro Carril Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Estudiantes de La Plata ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("clubs", null, {});
  },
};
