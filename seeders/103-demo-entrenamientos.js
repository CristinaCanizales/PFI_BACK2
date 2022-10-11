"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("entrenamientos", [
      {
        title: "Brazos",
        video: "ZIm_qrJSOds",
        detalleRutina: "biceps, triceps",
        categoria: "Entrenamiento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Piernas",
        video: "HNosAVcpsz4",
        detalleRutina: "cuadriceps, abductores, aductores, sentadillas",
        categoria: "Entrenamiento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Abdomen",
        video: "Pvxj-1dgVk0",
        detalleRutina: "cortos, medios, largos",
        categoria: "Entrenamiento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hombros",
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
