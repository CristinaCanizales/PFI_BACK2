/* Controllers */
const rolController = require("../controllers/rol");
const usuarioController = require("../controllers/usuario");
module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "No tienes acceso a la API de My Team Stats",
    })
  );
  //Rol
  app.post("/roles/nuevo", rolController.create);
  app.get("/roles", rolController.list);
  app.get("/roles/nombre", rolController.find);

  //Usuario
  app.post("/usuarios/nuevo", usuarioController.create);
  app.get("/usuarios", usuarioController.list);
  app.get("/usuarios/find/correo", usuarioController.find);
};
