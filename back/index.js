const server = require("./src/app");
const { conn, Driver } = require("./src/db.js");
const { seedTeamsFromAPI } = require("./src/services/getTeamsService");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    await seedTeamsFromAPI();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  // me aseguro de que ya exista al menos un registro en la base de datos,
  // aunque podria armar un json y hacer un BulkCreate para tener al menos 10 y hacer pruebas
  // mas exhaustivas
  .then(async () => {
    try {
      const firstDriver = await Driver.create({
        id: 'e95182e8-f409-4eea-84e4-f9548a0b5de6',
        nombre: "Jose",
        apellido: "Centeno",
        imagen: "url_de_la_imagen",
        nacionalidad: "Argentino",
        descripcion: "El primer Driver",
        fechaNacimiento: "1993-10-14",
      });
      console.log("Base de datos cargada");
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.error(error));
