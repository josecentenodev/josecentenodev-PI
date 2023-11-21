const { Driver } = require('../db');
const { Op } = require('sequelize');
const axios = require('axios');

async function getDriversByName(name) {
  try {
    // Consulta a la base de datos usando Sequelize
    const dbDrivers = await Driver.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${name}%` // Consulta insensible a mayúsculas y minúsculas
        }
      },
      limit: 15
    });

    // Consulta a la API externa
    const apiResponse = await axios.get('http://localhost:5000/drivers');
    const apiDrivers = apiResponse.data
      .filter(driver => driver.name.forename && driver.name.forename.toLowerCase().includes(name.toLowerCase()))
      .slice(0, 15);

    // Combinar y devolver resultados
    const mergedDrivers = [...dbDrivers, ...apiDrivers];
    if (!mergedDrivers.length) {
      const error = new Error('Driver not found');
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

    // Combinar y devolver resultados
    const mergedDrivers = [...dbDrivers, ...apiDrivers];
    return mergedDrivers;
  } catch (error) {
    // Manejar el error según sea necesario
    throw error;
  }
}

module.exports = {getDriversByName, getAllDrivers};
