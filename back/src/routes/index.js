// Importar controladores
const getAllDrivers = require('../controllers/getAllDrivers')

// Crear Router de Express
const express = require("express");
const router = express.Router();

// TODO: DEFINIR LAS RUTAS
// Definir las rutas
router.get("/drivers", getAllDrivers);
// router.get('/', ()=>{});
// router.get('/', ()=>{});
// router.post('/', ()=>{});
// router.post('/', ()=>{});
// router.delete('/:id', ()=>{});

// Exportar el router
module.exports = router;
