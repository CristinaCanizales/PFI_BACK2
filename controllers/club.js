const Sequelize = require("sequelize");
const club = require("../models").club;
module.exports = {
  create(req, res) {
    return club
      .create({
        nombre: req.body.nombre,
      })
      .then((club) => res.status(200).send(club))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return club
      .findAll({})
      .then((club) => res.status(200).send(club))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return club
      .findAll({
        where: {
          nombre: req.params.nombre,
        },
      })
      .then((club) => res.status(200).send(club))
      .catch((error) => res.status(400).send(error));
  },
};
