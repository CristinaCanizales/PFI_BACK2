const Sequelize = require("sequelize");
const handball = require("../models").handball;
module.exports = {
  create(req, res) {
    return handball
      .create({
        gol7m: req.body.gol7m,
        gol6m: req.body.gol6m,
        golContra: req.body.golContra,
        golPenal: req.body.golPenal,
        atajada: req.body.atajada,
        errada: req.body.errada,
        robada: req.body.robada,
        parada: req.body.parada,
        expulsion: req.body.expulsion,
        perdida: req.body.perdida,
        jugadorId: req.body.jugadorId,
        partidoId: req.body.partidoId,
      })
      .then((handball) => res.status(200).send(handball))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return handball
      .update(
        {
          gol7m: req.body.gol7m,
          gol6m: req.body.gol6m,
          golContra: req.body.golContra,
          golPenal: req.body.golPenal,
          atajada: req.body.atajada,
          errada: req.body.errada,
          robada: req.body.robada,
          parada: req.body.parada,
          expulsion: req.body.expulsion,
          perdida: req.body.perdida,
          jugadorId: req.body.jugadorId,
          partidoId: req.body.partidoId,
        },
        {
          where: {
            jugadorId: req.params.jugadorId,
            partidoId: req.body.partidoId,
          },
        }
      )
      .then((handball) => res.status(200).send(handball))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return handball
      .findAll({})
      .then((handball) => res.status(200).send(handball))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return handball
      .findAll({
        where: {
          titulo: req.params.titulo,
        },
      })
      .then((handball) => res.status(200).send(handball))
      .catch((error) => res.status(400).send(error));
  },
};
