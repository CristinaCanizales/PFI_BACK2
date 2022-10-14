const Sequelize = require("sequelize");
const handball = require("../models").handball;
module.exports = {
  create(req, res) {
    return handball
      .create({
        accionId: req.body.accionId,
        jugadorId: req.body.jugadorId,
        partidoId: req.body.partidoId,
      })
      .then((handball) => res.status(200).send(handball))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return handball
      .findAll({})
      .then((handball) => res.status(200).send(handball))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return handball
      .findAll({
        where: {
          jugadorId: req.query.jugadorId,
          partidoId: req.query.partidoId,
        },
      })
      .then((handball) => res.status(200).send(handball))
      .catch((error) => res.status(400).send(error));
  },
};
