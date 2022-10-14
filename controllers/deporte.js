const Sequelize = require("sequelize");
const deporte = require("../models").deporte;
module.exports = {
  create(req, res) {
    return deporte
      .create({
        nombre: req.body.nombre,
      })
      .then((deporte) => res.status(200).send(deporte))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return deporte
      .findAll({})
      .then((deporte) => res.status(200).send(deporte))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return deporte
      .findAll({
        where: {
          nombre: req.query.nombre,
        },
      })
      .then((deporte) => res.status(200).send(deporte))
      .catch((error) => res.status(400).send(error));
  },
};
