const Sequelize = require("sequelize");
const torneo = require("../models").torneo;
module.exports = {
  create(req, res) {
    return torneo
      .create({
        nombre: req.body.nombre,
        anioTorneo: req.body.anioTorneo,
        descripcion: req.body.descripcion,
        ganadorId: req.body.ganadorId,
        deporteId: req.body.deporteId,
      })
      .then((torneo) => res.status(200).send(torneo))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return torneo
      .findAll({})
      .then((torneo) => res.status(200).send(torneo))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return torneo
      .findAll({
        where: {
          nombre: req.query.nombre,
        },
      })
      .then((torneo) => res.status(200).send(torneo))
      .catch((error) => res.status(400).send(error));
  },
};
