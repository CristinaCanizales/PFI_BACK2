const Sequelize = require("sequelize");
const volleyball = require("../models").volleyball;
module.exports = {
  create(req, res) {
    return volleyball
      .create({
        accionId: req.body.accionId,
        jugadorId: req.body.jugadorId,
        partidoId: req.body.partidoId,
      })
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
          titulo: req.query.titulo,
        },
      })
      .then((volleyball) => res.status(200).send(volleyball))
      .catch((error) => res.status(400).send(error));
  },
};
