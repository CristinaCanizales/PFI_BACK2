const Sequelize = require("sequelize");
const equipo = require("../models").equipo;
module.exports = {
  create(req, res) {
    return equipo
      .create({
        nombre: req.body.nombre,
        genero: req.body.genero,
        clubId: req.body.clubId,
        deporteId: req.body.deporteId,
      })
      .then((equipo) => res.status(200).send(equipo))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return equipo
      .findAll({})
      .then((equipo) => res.status(200).send(equipo))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return equipo
      .findAll({
        where: {
          nombre: req.query.nombre,
        },
      })
      .then((equipo) => res.status(200).send(equipo))
      .catch((error) => res.status(400).send(error));
  },
};
