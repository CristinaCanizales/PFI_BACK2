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
          fechaPartido: req.params.fechaPartido,
          ganadorId: req.params.ganadorId,
          torneoId: req.params.torneoId,
        },
      })
      .then((partido) => res.status(200).send(partido))
      .catch((error) => res.status(400).send(error));
  },
};
