"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("equipos", [
      {
        nombre: "Primera división",
        genero: "F",
        clubId: 1,
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Segunda división",
        genero: "F",
        clubId: 1,
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Primera división",
        genero: "M",
        clubId: 2,
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Primera división",
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
