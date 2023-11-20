const axios = require("axios");

async function getAllDrivers(req, res) {
  try {
    const API_URL = "http://localhost:5000/drivers";
    const response = await axios.get(API_URL);
    const drivers = response.data;
    res.status(200).json(drivers);
  } catch (error) {
    // Error en la petición, responde con 500 y un mensaje de error
    res.status(500).json({ message: error.message });
  }
}

module.exports = getAllDrivers;
