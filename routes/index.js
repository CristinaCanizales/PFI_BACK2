/* Controllers */
const accionController = require("../controllers/accion");
const clubController = require("../controllers/club");
const deporteController = require("../controllers/deporte");
const entrenamientoController = require("../controllers/entrenamiento");
const equipoController = require("../controllers/equipo");
const futbolController = require("../controllers/futbol");
const grabacionController = require("../controllers/grabacion");
const handballController = require("../controllers/handball");
const jugadorController = require("../controllers/jugador");
const jugadorRutinaController = require("../controllers/jugadorRutina");
const partidoController = require("../controllers/partido");
const presentismoController = require("../controllers/presentismo");
const rolController = require("../controllers/rol");
const testFisicoController = require("../controllers/testFisico");
const torneoController = require("../controllers/torneo");
const usuarioController = require("../controllers/usuario");
const volleyballController = require("../controllers/volleyball");

module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "No tienes acceso a la API de My Team Stats",
    })
  );

  //Accion
  app.post("/acciones/nuevo", accionController.create);
  app.get("/acciones", accionController.list);
  app.get("/acciones/find/", accionController.find);
  app.get("/acciones/futbol/", accionController.findFutbol);
  app.get("/acciones/volleyball/", accionController.findVolleyball);
  app.get("/acciones/handball/", accionController.findHandball);

  //Club
  app.post("/clubes/nuevo", clubController.create);
  app.get("/clubes", clubController.list);
  app.get("/clubes/find/", clubController.find);

  //Deporte
  app.post("/deportes/nuevo", deporteController.create);
  app.get("/deportes", deporteController.list);
  app.get("/deportes/find/", deporteController.find);

  //Entrenamiento
  app.post("/entrenamientos/nuevo", entrenamientoController.create);
  app.get("/entrenamientos", entrenamientoController.list);
  app.get("/entrenamientos/find/", entrenamientoController.find);

  //Equipo
  app.post("/equipos/nuevo", equipoController.create);
  app.get("/equipos", equipoController.list);
  app.get("/equipos/find/", equipoController.find);

  //Futbol
  app.post("/futbol/nuevo", futbolController.create);
  app.get("/futbol", futbolController.list);
  app.get("/futbol/find/", futbolController.find);

  //Grabacion
  app.post("/grabaciones/nuevo", grabacionController.create);
  app.get("/grabaciones", grabacionController.list);
  app.get("/grabaciones/find/", grabacionController.find);

  //Handball
  app.post("/handball/nuevo", handballController.create);
  app.get("/handball", handballController.list);
  app.get("/handball/find/", handballController.find);

  //Jugador
  app.post("/jugadores/nuevo", jugadorController.create);
  app.get("/jugadores", jugadorController.list);
  app.get("/jugadores/find/", jugadorController.find);

  //JugadorRutina
  app.post("/jugadorRutinas/nuevo", jugadorRutinaController.create);
  app.get("/jugadorRutinas", jugadorRutinaController.list);
  app.get("/jugadorRutinas/find/", jugadorRutinaController.find);

  //Partido
  app.post("/partidos/nuevo", partidoController.create);
  app.get("/partidos", partidoController.list);
  app.get("/partidos/find/", partidoController.find);

  //Presentismo
  app.post("/presentismos/nuevo", presentismoController.create);
  app.get("/presentismos", presentismoController.list);
  app.get("/presentismos/find/", presentismoController.find);

  //Rol
  app.post("/roles/nuevo", rolController.create);
  app.get("/roles", rolController.list);
  app.get("/roles/nombre", rolController.find);

  //TestFisico
  app.post("/testsFisicos/nuevo", testFisicoController.create);
  app.get("/testsFisicos", testFisicoController.list);
  app.get("/testsFisicos/find/", testFisicoController.find);

  //Torneo
  app.post("/torneos/nuevo", torneoController.create);
  app.get("/torneos", torneoController.list);
  app.get("/torneos/find/", torneoController.find);

  //Usuario
  app.post("/usuarios/nuevo", usuarioController.create);
  app.get("/usuarios", usuarioController.list);
  app.get("/usuarios/find/correo", usuarioController.find);

  //Volleyball
  app.post("/volleyball/nuevo", volleyballController.create);
  app.get("/volleyball", volleyballController.list);
  app.get("/volleyball/find/", volleyballController.find);
};
