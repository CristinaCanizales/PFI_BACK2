const Sequelize = require("sequelize");
const volleyball = require("../models").volleyball;
module.exports = {
  create(req, res) {
    return volleyball
      .create({
        acceso: req.body.acceso,
        saque: req.body.saque,
        recepcion: req.body.recepcion,
        armado: req.body.armado,
        bloqueo: req.body.bloqueo,
        defensa: req.body.defensa,
        punto: req.body.punto,
        jugadorId: req.body.jugadorId,
        partidoId: req.body.partidoId,
      })
      .then((volleyball) => res.status(200).send(volleyball))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return volleyball
      .update(
        {
          acceso: req.body.acceso,
          saque: req.body.saque,
          recepcion: req.body.recepcion,
          armado: req.body.armado,
          bloqueo: req.body.bloqueo,
          defensa: req.body.defensa,
          punto: req.body.punto,
          jugadorId: req.body.jugadorId,
          partidoId: req.body.partidoId,
        },
        {
          where: {
            jugadorId: req.params.jugadorId,
            partidoId: req.body.partidoId,
          },
        }
      )
      .then((volleyball) => res.status(200).send(volleyball))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return volleyball
      .findAll({})
      .then((volleyball) => res.status(200).send(volleyball))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return volleyball
      .findAll({
        where: {
          titulo: req.params.titulo,
        },
      })
      .then((volleyball) => res.status(200).send(volleyball))
      .catch((error) => res.status(400).send(error));
  },
};
