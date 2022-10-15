const Sequelize = require("sequelize");
const usuario = require("../models").usuario;
const jugador = require("../models").jugador;
module.exports = {
  create(req, res) {
    return usuario
      .update(
        {
          rolId: req.body.rolId,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          correo: req.body.correo.toLowerCase().trim(),
          contrasena: req.body.contrasena,
          edad: req.body.edad,
          direccion: req.body.direccion,
          telefono: req.body.telefono,
          foto: req.body.foto,
        },
        {
          where: {
            correo: req.body.correo.toLowerCase().trim(),
          },
        }
      )
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
          correo: req.query.correo.toLowerCase().trim(),
        },
      })
      .then((usuario) => res.status(200).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  logIn(req, res) {
    return usuario
      .findOne({
        where: {
          correo: req.body.correo.toLowerCase().trim(),
          contrasena: req.body.contrasena,
        },
      })
      .then((usuario) => {
        if (usuario === null) {
          res.status(200).send({ error: "Usuario o contraseña incorrectos" });
        } else {
          jugador
            .findOne({
              include: [{ all: true }],
              where: {
                usuarioId: usuario.id,
              },
            })
            .then((player) => {
              res.status(200).send(JSON.stringify(player));
            });
        }
      })
      .catch((error) => res.status(400).send(error));
  },
};
