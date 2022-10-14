const Sequelize = require("sequelize");
const jugador = require("../models").jugador;
const usuario = require("../models").usuario;
const testFisico = require("../models").testFisico;
jugador;
module.exports = {
  create(req, res) {
    return testFisico
      .create({
        resistencia: req.body.resistencia,
        velocidad: req.body.velocidad,
        saltoAlto: req.body.saltoAlto,
        saltoLargo: req.body.saltoLargo,
        fechaTest: req.body.fechaTest,
        jugadorId: req.body.jugadorId,
      })
      .then((testFisico) => res.status(200).send(testFisico))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return testFisico
      .findAll({
        include: [
          {
            model: jugador,
            as: "jugador",
            include: [
              {
                model: usuario,
                as: "usuario",
              },
            ],
          },
        ],
      })
      .then((testFisico) => res.status(200).send(testFisico))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return testFisico
      .findAll({
        where: {
          jugadorId: req.query.jugadorId,
          fechaTest: req.query.fechaTest,
        },
      })
      .then((testFisico) => res.status(200).send(testFisico))
      .catch((error) => res.status(400).send(error));
  },
};
