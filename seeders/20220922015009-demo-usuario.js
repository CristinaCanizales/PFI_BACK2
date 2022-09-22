"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("usuarios", [
      {
        rolId: 1,
        nombre: "Cristina",
        apellido: "Cañizales",
        edad: 25,
        direccion: "Av Belgrano 1783",
        foto: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tYnJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
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
        foto: "http://losmejoresjardines.com/wp-content/uploads/2020/04/relacion-padre-e-hijo.jpg",
        correo: "agostina@gmail.com",
        contrasena: "Agostina1234",
        telefono: "0303456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rolId: 2,
        nombre: "Pierina",
        apellido: "Tufillaro",
        edad: 25,
        direccion: "Beruti 4222",
        foto: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        correo: "pierina@gmail.com",
        contrasena: "Pierina1234",
        telefono: "0303456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rolId: 2,
        nombre: "Nicolás",
        apellido: "Domínguez",
        edad: 25,
        direccion: "French 2700",
        foto: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg",
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
