const Sequelize = require("sequelize");
const rol = require("../models").rol;
module.exports = {
  create(req, res) {
    return rol
      .create({
        nombre: req.body.nombre,
      })
      .then((rol) => res.status(200).send(rol))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return rol
      .findAll({})
      .then((rol) => res.status(200).send(rol))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return rol
      .findAll({
        where: {
          nombre: req.query.nombre,
        },
      })
      .then((rol) => res.status(200).send(rol))
      .catch((error) => res.status(400).send(error));
  },
};
