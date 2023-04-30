// const routes = require("express").Router();

// const myController = require("../controller");

// routes.get("/", myController.display);

// module.exports = routes;

const express = require("express");
const router = express.Router();

router.use("/contacts", require("./contacts"));
router.use("/", require("./swagger"));

module.exports = router;
