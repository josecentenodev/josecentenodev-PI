// Importar controladores
const getDrivers = require("../controllers/getDrivers");
const getDriverById = require("../controllers/getDriverById");
const createDriver = require("../controllers/createDriver");
const deleteDriver = require("../controllers/deleteDriver");
// Crear Router de Express
const express = require("express");
const router = express.Router();

// drivers routes
router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriverById);
router.post("/drivers", createDriver);
router.delete("/drivers/:id", deleteDriver);

// teams routes

// router.post('/', ()=>{});
// router.post('/', ()=>{});
// router.post('/', ()=>{});
// router.post('/', ()=>{});

// Exportar el router
module.exports = router;
