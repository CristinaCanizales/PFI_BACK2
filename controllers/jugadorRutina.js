const Sequelize = require("sequelize");
const jugadorRutina = require("../models").jugadorRutina;
module.exports = {
  create(req, res) {
    return jugadorRutina
      .create({
        jugadorId: req.body.jugadorId,
        entrenamientoId: req.body.entrenamientoId,
      })
      .then((jugadorRutina) => res.status(200).send(jugadorRutina))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return jugadorRutina
      .findAll({})
      .then((jugadorRutina) => res.status(200).send(jugadorRutina))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return jugadorRutina
      .findAll({
        where: {
          jugadorId: req.query.jugadorId,
          entrenamientoId: req.query.entrenamientoId,
        },
      })
      .then((jugadorRutina) => res.status(200).send(jugadorRutina))
      .catch((error) => res.status(400).send(error));
  },
};
