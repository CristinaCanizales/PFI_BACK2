const Sequelize = require("sequelize");
const accion = require("../models").accion;
module.exports = {
  create(req, res) {
    return accion
      .create({
        nombre: req.body.nombre,
        deporteId: req.body.deporteId,
      })
      .then((accion) => res.status(200).send(accion))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return accion
      .findAll({})
      .then((accion) => res.status(200).send(accion))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return accion
      .findAll({
        where: {
          nombre: req.query.nombre,
        },
      })
      .then((accion) => res.status(200).send(accion))
      .catch((error) => res.status(400).send(error));
  },
  findFutbol(req, res) {
    return accion
      .findAll({
        where: {
          deporteId: 1,
        },
      })
      .then((accion) => res.status(200).send(accion))
      .catch((error) => res.status(400).send(error));
  },
  findVolleyball(req, res) {
    return accion
      .findAll({
        where: {
          deporteId: 2,
        },
      })
      .then((accion) => res.status(200).send(accion))
      .catch((error) => res.status(400).send(error));
  },
  findHandball(req, res) {
    return accion
      .findAll({
        where: {
          deporteId: 3,
        },
      })
      .then((accion) => res.status(200).send(accion))
      .catch((error) => res.status(400).send(error));
  },
};
