"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("usuarios", [
      {
        rolId: 2,
        nombre: "Cristina",
        apellido: "Cañizales",
        edad: 25,
        direccion: "Av Belgrano 1783",
        foto: "https://res.cloudinary.com/guariqueteo/image/upload/v1632971675/cristi.jpg",
        correo: "cristina@gmail.com",
        contrasena: "Cristina1234",
        telefono: "0303456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rolId: 1,
        nombre: "Agostina",
        apellido: "Zorzón",
        edad: 25,
        direccion: "Mansilla 2883",
        foto: "https://res.cloudinary.com/guariqueteo/image/upload/v1632973985/agos.jpg",
        correo: "agostina@gmail.com",
        contrasena: "Agostina1234",
        telefono: "0303456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rolId: 1,
        nombre: "Pierina",
        apellido: "Tufillaro",
        edad: 25,
        direccion: "Beruti 4222",
        foto: "https://res.cloudinary.com/guariqueteo/image/upload/v1632973981/pieri.jpg",
        correo: "pierina@gmail.com",
        contrasena: "Pierina1234",
        telefono: "0303456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rolId: 1,
        nombre: "Nicolás",
        apellido: "Domínguez",
        edad: 25,
        direccion: "French 2700",
        foto: "https://res.cloudinary.com/guariqueteo/image/upload/v1635446414/rocky.jpg",
        correo: "nicolas@gmail.com",
        contrasena: "Nicolas1234",
        telefono: "0303456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("usuarios", null, {});
  },
};
