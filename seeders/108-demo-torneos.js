"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("torneos", [
      {
        nombre: "Torneito egresados",
        anioTorneo: new Date(2022, 6),
        descripcion: "Torneito para los egresados del año 2022",
        ganadorId: 1,
        deporteId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("torneos", null, {});
  },
};
