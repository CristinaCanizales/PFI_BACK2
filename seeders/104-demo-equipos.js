"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("equipos", [
      {
        nombre: "Linces",
        genero: "F",
        clubId: 1,
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Los wadistas",
        genero: "F",
        clubId: 1,
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Wildcats",
        genero: "M",
        clubId: 2,
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Tigres",
        genero: "F",
        clubId: 1,
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("equipos", null, {});
  },
};
