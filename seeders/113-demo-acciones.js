"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("accions", [
      {
        nombre: "Gol Adentro",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol Afuera",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol Tiro Libre",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol Penal",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol Cabeza",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Tarjeta Amarilla",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Tarjeta Roja",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Falta Cometida",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Falta Recibida",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Pase",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Intercepción",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Atajada",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol Contra",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Autogol",
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Acceso",
        deporteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Saque",
        deporteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Recepción",
        deporteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Armado",
        deporteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Bloqueo",
        deporteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Defensa",
        deporteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Punto",
        deporteId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol 7m",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol 6m",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol Contra",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Gol Penal",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Atajada",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Errada",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Robada",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Parada",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Expulsada",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Perdida",
        deporteId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("accions", null, {});
  },
};
