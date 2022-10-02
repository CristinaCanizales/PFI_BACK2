const Sequelize = require("sequelize");
const presentismo = require("../models").presentismo;
module.exports = {
  create(req, res) {
    return presentismo
      .create({
        presente: req.body.presente,
        fecha: req.body.fecha,
        usuarioId: req.body.usuarioId,
        equipoId: req.body.equipoId,
      })
      .then((presentismo) => res.status(200).send(presentismo))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return presentismo
      .findAll({})
      .then((presentismo) => res.status(200).send(presentismo))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return presentismo
      .findAll({
        where: {
          fecha: req.params.fecha,
          usuarioId: req.params.usuarioId,
        },
      })
      .then((presentismo) => res.status(200).send(presentismo))
      .catch((error) => res.status(400).send(error));
  },
};
