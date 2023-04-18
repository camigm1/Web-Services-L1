const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Camila Gallegos");
});

module.exports = routes;
