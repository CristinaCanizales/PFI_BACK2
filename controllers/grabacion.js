const Sequelize = require("sequelize");
const grabacion = require("../models").grabacion;
module.exports = {
  create(req, res) {
    return grabacion
      .create({
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        partidoId: req.body.partidoId,
        video: req.body.video,
      })
      .then((grabacion) => res.status(200).send(grabacion))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return grabacion
      .findAll({})
      .then((grabacion) => res.status(200).send(grabacion))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return grabacion
      .findAll({
        where: {
          titulo: req.params.titulo,
        },
      })
      .then((grabacion) => res.status(200).send(grabacion))
      .catch((error) => res.status(400).send(error));
  },
};
