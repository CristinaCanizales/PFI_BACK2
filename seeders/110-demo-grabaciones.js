"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("grabacions", [
      {
        titulo: "Partido amistoso con x",
        fecha: new Date(2022, 7, 6),
        partidoId: 1,
        video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Entrenamiento 22/07",
        fecha: new Date(2022, 6, 7),
        partidoId: 2,
        video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Entrenamiento 24/07",
        fecha: new Date(2022, 6, 24),
        partidoId: 3,
        video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Partido amistoso con y",
        fecha: new Date(2022, 9, 1),
        partidoId: 4,
        video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("grabacions", null, {});
  },
};
