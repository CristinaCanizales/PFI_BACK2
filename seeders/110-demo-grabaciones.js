"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("grabacions", [
      {
        titulo: "Handball femenino menores",
        fecha: new Date(2022, 7, 6),
        partidoId: 1,
        video:
          "https://res.cloudinary.com/guariqueteo/video/upload/v1665454052/PFI/Partido_1_sajs98.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Final panamericanos",
        fecha: new Date(2022, 6, 7),
        partidoId: 2,
        video:
          "https://res.cloudinary.com/guariqueteo/video/upload/v1665455050/PFI/Partido_2_xc2jru.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Argentinos juniors 32-31",
        fecha: new Date(2022, 6, 24),
        partidoId: 3,
        video:
          "https://res.cloudinary.com/guariqueteo/video/upload/v1665455219/PFI/Partido_3_m8c5fc.mp4v",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Final 2015",
        fecha: new Date(2022, 9, 1),
        partidoId: 4,
        video:
          "https://res.cloudinary.com/guariqueteo/video/upload/v1665455350/PFI/Partido_4_bsbdyf.mp4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("grabacions", null, {});
  },
};
