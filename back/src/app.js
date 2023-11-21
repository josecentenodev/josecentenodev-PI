const express = require("express");
const router = require('./routes')
const morgan = require("morgan");
const cors = require("cors");
const server = express();



// Middleware para ver peticiones por consola
server.use(morgan("dev"));
// Middleware para analizar el cuerpo de solicitudes JSON
server.use(express.json());
// Middleware para permitir solicitudes desde cualquier origen
server.use(cors());
// Middleware para agregar "/" antes de cada ruta en el enrutador
server.use('/api', router);

server.use((req,res)=> {
  res.status(404).send('<h1>404</h1>')
})

module.exports = server