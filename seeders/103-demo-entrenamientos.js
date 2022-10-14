"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("entrenamientos", [
      {
        titulo: "Brazos",
        video: "ZIm_qrJSOds",
        detalleRutina: "biceps, triceps",
        categoria: "Entrenamiento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Piernas",
        video: "HNosAVcpsz4",
        detalleRutina: "cuadriceps, abductores, aductores, sentadillas",
        categoria: "Entrenamiento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Abdomen",
        video: "Pvxj-1dgVk0",
        detalleRutina: "cortos, medios, largos",
        categoria: "Entrenamiento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Hombros",
        video: "rzM6qoSAuVg",
        detalleRutina: "manguito rotador",
        categoria: "Lesión",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("entrenamientos", null, {});
  },
};
