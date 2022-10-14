const Sequelize = require("sequelize");
const partido = require("../models").partido;
module.exports = {
  create(req, res) {
    return partido
      .create({
        equipoAId: req.body.equipoAId,
        equipoBId: req.body.equipoBId,
        fechaPartido: req.body.fechaPartido,
        ganadorId: req.body.ganadorId,
        torneoId: req.body.torneoId,
      })
      .then((partido) => res.status(200).send(partido))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return partido
      .findAll({})
      .then((partido) => res.status(200).send(partido))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return partido
      .findAll({
        where: {
          fechaPartido: req.query.fechaPartido,
          ganadorId: req.query.ganadorId,
          torneoId: req.query.torneoId,
        },
      })
      .then((partido) => res.status(200).send(partido))
      .catch((error) => res.status(400).send(error));
  },
};
