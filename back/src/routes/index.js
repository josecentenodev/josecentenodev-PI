// Importar controladores
// drivers
const getDrivers = require("../controllers/drivers/getDrivers");
const getDriverById = require("../controllers/drivers/getDriverById");
const createDriver = require("../controllers/drivers/createDriver");
const deleteDriver = require("../controllers/drivers/deleteDriver");
// teams
const getTeams = require("../controllers/teams/getTeams");
const createTeam = require("../controllers/teams/createTeam");

// Crear Router de Express
const express = require("express");
const router = express.Router();

// drivers routes
router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriverById);
router.post("/drivers", createDriver);
router.delete("/drivers/:id", deleteDriver);

// teams routes
router.get("/teams", getTeams);
router.post("/teams", createTeam);


// Exportar el router
module.exports = router;
