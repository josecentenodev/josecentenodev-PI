const { Driver, Team } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

async function getDriversByName(name) {
  try {
    // Consulta a la base de datos usando Sequelize
    const dbDrivers = await Driver.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${name}%`, // Consulta insensible a mayúsculas y minúsculas
        },
      },
      limit: 15,
      include: {
        model: Team,
        attributes: ["id", "nombre"],
        through: {
          attributes: [],
        },
      },
    });

    // Consulta a la API externa
    const apiResponse = await axios.get("http://localhost:5000/drivers");
    const apiDrivers = apiResponse.data
      .filter(
        (driver) =>
          driver.name.forename &&
          driver.name.forename.toLowerCase().includes(name.toLowerCase())
      )
      .slice(0, 15);

    //TODO: Se puede extraer la logica de este map en una funcion helper
    const driversWithImage = apiDrivers.map((driver) => ({
      ...driver,
      image: {
        url:
          driver.image.url ||
          // Descubri que habia una imagen random en la api que era como una por defecto y decidi incorporarla como por defecto tambien para los que no tengan imagen
          "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png",
        imageby: driver.image.imageby || "By default",
      },
    }));

    // Combinar y devolver resultados
    const mergedDrivers = [...dbDrivers, ...driversWithImage];
    if (!mergedDrivers.length) {
      const error = new Error("Driver not found");
      error.status = 404;
      throw error;
    }
    return mergedDrivers;
  } catch (error) {
    // Manejar el error según sea necesario
    throw error;
  }
}

async function getAllDrivers() {
  try {
    // Consulta a la base de datos usando Sequelize
    const dbDrivers = await Driver.findAll({
      include: {
        model: Team,
        attributes: ["id", "nombre"],
        through: {
          attributes: [],
        },
      },
    });

    // Consulta a la API externa
    const apiResponse = await axios.get(`http://localhost:5000/drivers`);
    const apiDrivers = apiResponse.data;

    //TODO: Se puede extraer la logica de este map en una funcion helper
    const driversWithImage = apiDrivers.map((driver) => ({
      ...driver,
      image: {
        url:
          driver.image.url ||
          // Descubri que habia una imagen random en la api que era como una por defecto y decidi incorporarla como por defecto tambien para los que no tengan imagen
          "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png",
        imageby: driver.image.imageby || "By default",
      },
    }));

    // Combinar y devolver resultados
    const mergedDrivers = [...dbDrivers, ...driversWithImage];
    return mergedDrivers;
  } catch (error) {
    // Manejar el error según sea necesario
    throw error;
  }
}

module.exports = { getDriversByName, getAllDrivers };
