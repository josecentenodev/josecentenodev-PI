const { Driver } = require("../db");
const axios = require("axios");

async function getDriverFromDB(id) {
  try {
    const driver = await Driver.findOne({ where: { id: id } });
    return driver;
  } catch (error) {
    // Manejar el error según sea necesario
    if (error.original.code === "22P02") {
        const handleError = new Error("Bad Request, Invalid id value");
        handleError.status = 400;
        throw handleError;
      }
    throw error;
  }
}

async function getDriverFromAPI(id) {
  try {
    const API_URL = `http://localhost:5000/drivers/${id}`;
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    // Manejar el error según sea necesario
    throw error;
  }
}

module.exports = { getDriverFromDB, getDriverFromAPI };
