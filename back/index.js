const server = require("./src/app");
const { conn, Driver, Team } = require("./src/db.js");
const { seedTeamsFromAPI } = require("./src/services/getTeamsService");
const PORT = 10000;

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
      // const teamsExample = [
      //   { id: 1, nombre: "McLaren" },
      //   { id: 2, nombre: "Mercedes" },
      //   { id: 3, nombre: "Prost" },
      // ]
      const teamsExample = [1, 2, 3];
      const firstDriver = await Driver.create({
        id: "e95182e8-f409-4eea-84e4-f9548a0b5de6",
        nombre: "Jose",
        apellido: "Centeno",
        // Descubri que habia una imagen random en la api que era como una por defecto y decidi incorporarla como por defecto tambien para los que no tengan imagen
        imagen: "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png",
        nacionalidad: "Argentino",
        descripcion: "El primer Driver",
        fechaNacimiento: "1993-10-14",
      });

      await firstDriver.addTeams(teamsExample);

      console.log("Base de datos cargada");
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.error(error));
