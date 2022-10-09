const Sequelize = require("sequelize");
const futbol = require("../models").futbol;
module.exports = {
  create(req, res) {
    return futbol
      .create({
        accionId: req.body.accionId,
        jugadorId: req.body.jugadorId,
        partidoId: req.body.partidoId,
      })
      .then((futbol) => res.status(200).send(futbol))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return futbol
      .findAll({})
      .then((futbol) => res.status(200).send(futbol))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return futbol
      .findAll({
        where: {
          jugadorId: req.body.jugadorId,
          partidoId: req.body.partidoId,
        },
      })
      .then((futbol) => res.status(200).send(futbol))
      .catch((error) => res.status(400).send(error));
  },
};
