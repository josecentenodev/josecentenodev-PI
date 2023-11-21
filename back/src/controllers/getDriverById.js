const axios = require("axios");

async function getDriverById(req, res) {
  console.log(isNaN(Number(req.params.id)))
  try {
    const id = req.params.id;
    const API_URL = `http://localhost:5000/drivers/${id}`;
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    // Lo dejo en manos de json-server
    res.status(error.response.status).json({ message: error.message });
  }
}

module.exports = getDriverById;
