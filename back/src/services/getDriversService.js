const { Driver } = require("../db");
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
          "https://ansarorthospinalhospital.com/wp-content/uploads/2020/05/blank-head-profile-pic-for-a-man.jpg",
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
    const dbDrivers = await Driver.findAll();

    // Consulta a la API externa
    const apiResponse = await axios.get(`http://localhost:5000/drivers`);
    const apiDrivers = apiResponse.data;

    //TODO: Se puede extraer la logica de este map en una funcion helper
    const driversWithImage = apiDrivers.map((driver) => ({
      ...driver,
      image: {
        url:
          driver.image.url ||
          "https://ansarorthospinalhospital.com/wp-content/uploads/2020/05/blank-head-profile-pic-for-a-man.jpg",
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
