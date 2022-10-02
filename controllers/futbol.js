const Sequelize = require("sequelize");
const futbol = require("../models").futbol;
module.exports = {
  create(req, res) {
    return futbol
      .create({
        golAdentro: req.body.golAdentro,
        golAfuera: req.body.golAfuera,
        golTiroLibre: req.body.golTiroLibre,
        golPenal: req.body.golPenal,
        golCabeza: req.body.golCabeza,
        amarilla: req.body.amarilla,
        roja: req.body.roja,
        faltasCometidas: req.body.faltasCometidas,
        faltasRecibidas: req.body.faltasRecibidas,
        pases: req.body.pases,
        intercepciones: req.body.intercepciones,
        atajadas: req.body.atajadas,
        contras: req.body.contras,
        jugadorId: req.body.jugadorId,
        partidoId: req.body.partidoId,
      })
      .then((futbol) => res.status(200).send(futbol))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return futbol
      .update(
        {
          golAdentro: req.body.golAdentro,
          golAfuera: req.body.golAfuera,
          golTiroLibre: req.body.golTiroLibre,
          golPenal: req.body.golPenal,
          golCabeza: req.body.golCabeza,
          amarilla: req.body.amarilla,
          roja: req.body.roja,
          faltasCometidas: req.body.faltasCometidas,
          faltasRecibidas: req.body.faltasRecibidas,
          pases: req.body.pases,
          intercepciones: req.body.intercepciones,
          atajadas: req.body.atajadas,
          contras: req.body.contras,
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
      .then((futbol) => res.status(200).send(futbol))
      .catch((error) => res.status(400).send(error));
  },
  list(_, res) {
    return futbol
      .findAll({})
      .then((futbol) => res.status(200).send(futbol))
      .catch((error) => res.status(400).send(error));
  },
  find(req, res) {
    return futbol
      .findAll({
        where: {
          titulo: req.params.titulo,
        },
      })
      .then((futbol) => res.status(200).send(futbol))
      .catch((error) => res.status(400).send(error));
  },
};
