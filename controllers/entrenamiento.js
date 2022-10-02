const Sequelize = require("sequelize");
const entrenamiento = require("../models").entrenamiento;
module.exports = {
  create(req, res) {
    return entrenamiento
      .create({
        titulo: req.body.titulo,
        detalleRutina: req.body.detalleRutina,
        categoria: req.body.categoria,
        video: req.body.video,
      })
      .then((entrenamiento) => res.status(200).send(entrenamiento))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return entrenamiento
      .findAll({})
      .then((entrenamiento) => res.status(200).send(entrenamiento))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return entrenamiento
      .findAll({
        where: {
          titulo: req.params.titulo,
        },
      })
      .then((entrenamiento) => res.status(200).send(entrenamiento))
      .catch((error) => res.status(400).send(error));
  },
};
