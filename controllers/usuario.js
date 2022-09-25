const Sequelize = require("sequelize");
const usuario = require("../models").usuario;
module.exports = {
  create(req, res) {
    return usuario
      .create({
        rolId: req.body.rolId,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo.toLowerCase().trim(),
        contrasena: req.body.contrasena,
        edad: req.body.edad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        foto: req.body.foto,
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return usuario
      .findAll({})
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return usuario
      .findAll({
        where: {
          correo: req.params.correo.toLowerCase().trim(),
        },
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },
};