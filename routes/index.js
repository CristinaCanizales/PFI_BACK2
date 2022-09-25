/* Controllers */
const equipoController = require("../controllers/equipo");
const jugadorController = require("../controllers/jugador");
const partidoController = require("../controllers/partido");
const rolController = require("../controllers/rol");
const usuarioController = require("../controllers/usuario");
module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "No tienes acceso a la API de My Team Stats",
    })
  );
  //Equipo
  app.post("/equipos/nuevo", equipoController.create);
  app.get("/equipos", equipoController.list);
  app.get("/equipos/find/", equipoController.find);

  //Jugador
  app.post("/jugadores/nuevo", jugadorController.create);
  app.get("/jugadores", jugadorController.list);
  app.get("/jugadores/find/", jugadorController.find);

  //Partido
  app.post("/partidos/nuevo", partidoController.create);
  app.get("/partidos", partidoController.list);
  app.get("/partidos/find/", partidoController.find);

  //Rol
  app.post("/roles/nuevo", rolController.create);
  app.get("/roles", rolController.list);
  app.get("/roles/nombre", rolController.find);

  //Usuario
  app.post("/usuarios/nuevo", usuarioController.create);
  app.get("/usuarios", usuarioController.list);
  app.get("/usuarios/find/correo", usuarioController.find);
};
