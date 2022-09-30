const Sequelize = require("sequelize");
const jugador = require("../models").jugador;
module.exports = {
  create(req, res) {
    return jugador
      .create({
        numero: req.body.numero,
        posicion: req.body.posicion,
        equipoId: req.body.equipoId,
        usuarioId: req.body.UsuarioId,
      })
      .then((jugador) => res.status(200).send(jugador))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return jugador
      .findAll({})
      .then((jugador) => res.status(200).send(jugador))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return jugador
      .findAll({
        where: {
          numero: req.params.numero,
          equipo: req.params.equipo,
        },
      })
      .then((jugador) => res.status(200).send(jugador))
      .catch((error) => res.status(400).send(error));
  },
};
